import fs from "fs"
import path from "path"

const docsDirectory = path.join(process.cwd(), "src/content/docs")

export function getAllDocsSlugs() {
    const filePaths = getFilesRecursively(docsDirectory)
    return filePaths.map((filePath) => {
        const relativePath = path.relative(docsDirectory, filePath)
        const slug = relativePath.replace(/\.mdx$/, "").split(path.sep)
        // Handle index
        if (slug.length === 1 && slug[0] === "index") return []
        return slug
    })
}

function getFilesRecursively(dir: string): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const files = entries
        .filter((file) => !file.isDirectory() && file.name.endsWith(".mdx"))
        .map((file) => path.join(dir, file.name))
    const folders = entries.filter((folder) => folder.isDirectory())

    for (const folder of folders) {
        files.push(...getFilesRecursively(path.join(dir, folder.name)))
    }
    return files
}
