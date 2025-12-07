import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "clarityui"
import { ArrowRight, Check, Command, Copy, Moon, Smartphone, Zap } from "lucide-react"

export default function IndexPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href="/docs"
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Follow on Twitter
                    </Link>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Build beautiful apps with <span className="text-primary">Clarity</span>
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        A comprehensive component library for modern web development. Minimalistic, accessible, and easy to customize.
                    </p>
                    <div className="space-x-4">
                        <Link href="/docs">
                            <Button size="lg" className="h-11 px-8">
                                Get Started
                            </Button>
                        </Link>
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <Button variant="outline" size="lg" className="h-11 px-8">
                                GitHub
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Feature packed</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Clarity UI provides everything you need to build standard-compliant, performant web applications.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <FeatureCard
                        icon={Zap}
                        title="Fast & Lightweight"
                        description="Built on primitives that are optimized for performance and bundle size."
                    />
                    <FeatureCard
                        icon={Smartphone}
                        title="Responsive"
                        description="Mobile-first design principles ensure your app looks great on any device."
                    />
                    <FeatureCard
                        icon={Moon}
                        title="Dark Mode"
                        description="Fully automated dark mode support with next-themes integration."
                    />
                    <FeatureCard
                        icon={Command}
                        title="Accessible"
                        description="Follows WAI-ARIA patterns for maximum accessibility."
                    />
                    <FeatureCard
                        icon={Copy}
                        title="Copy & Paste"
                        description="Simply copy component code or use the CLI to add to your project."
                    />
                    <FeatureCard
                        icon={Check}
                        title="Type Safe"
                        description="Written in TypeScript with complete type definitions included."
                    />
                </div>
            </section>

            {/* CLI Section */}
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Install via CLI
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Add components to your project with a single command.
                    </p>
                    <div className="w-full max-w-2xl rounded-lg border bg-zinc-950 px-6 py-4 text-left shadow-sm">
                        <code className="relative font-mono text-sm flex items-center justify-between text-zinc-50">
                            <span className="break-all">npx shadcn@latest add https://clarity-ui.pages.dev/r/button.json</span>
                        </code>
                    </div>
                </div>
            </section>

        </div>
    )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </div>
    )
}
