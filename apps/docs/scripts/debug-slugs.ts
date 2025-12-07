
import fs from "fs"
import path from "path"

const docsDirectory = path.join(process.cwd(), "src/content/docs")

function getFilesRecursively(dir) {
    if (!fs.existsSync(dir)) return []
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

function getAllDocsSlugs() {
    console.log("Scanning:", docsDirectory)
    const filePaths = getFilesRecursively(docsDirectory)
    console.log("Found files:", filePaths.length)
    return filePaths.map((filePath) => {
        const relativePath = path.relative(docsDirectory, filePath)
        const slug = relativePath.replace(/\.mdx$/, "").split(path.sep)
        return slug
    })
}

console.log(JSON.stringify(getAllDocsSlugs(), null, 2))
