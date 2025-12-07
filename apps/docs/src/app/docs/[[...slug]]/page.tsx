import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

import * as ClarityUI from "clarityui"
import { ComponentPreview } from "@/components/component-preview"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { ClientOnly } from "@/components/client-only"
import { Pre } from "@/components/pre"
import { getAllDocsSlugs } from "@/lib/docs"

const components = {
    ...ClarityUI,
    ComponentPreview,
    ErrorBoundary,
    ClientOnly,
    pre: Pre,
}

interface PageProps {
    params: {
        slug?: string[]
    }
}

async function getDocFromParams(slug: string[]) {
    const slugPath = slug?.join("/") || "index"
    const filePath = path.join(process.cwd(), "src/content/docs", `${slugPath}.mdx`)

    try {
        const fileContent = fs.readFileSync(filePath, "utf-8")
        const { content, data } = matter(fileContent)
        return { content, data }
    } catch (error) {
        return null
    }
}

export async function generateStaticParams() {
    const slugs = getAllDocsSlugs()
    return slugs.map((slug) => ({ slug }))
}

export default async function DocPage({ params }: PageProps) {
    const doc = await getDocFromParams(params.slug || [])

    if (!doc) {
        notFound()
    }

    return (
        <article className="prose dark:prose-invert max-w-none">
            <h1>{doc.data.title}</h1>
            <p className="text-xl text-muted-foreground">{doc.data.description}</p>
            <hr />
            <MDXRemote
                source={doc.content}
                components={components as any}
                options={{
                    mdxOptions: {
                        rehypePlugins: [
                            rehypeSlug,
                            [rehypeAutolinkHeadings, { behavior: "wrap" }],
                            [
                                rehypePrettyCode,
                                {
                                    theme: "github-dark",
                                    keepBackground: false,
                                },
                            ],
                        ],
                    },
                }}
            />
        </article>
    )
}
