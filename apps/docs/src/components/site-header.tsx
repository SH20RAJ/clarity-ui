import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "clarityui"
import { ModeToggle } from "@/components/mode-toggle"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            {siteConfig.name}
                        </span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="/docs"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                "text-foreground/60"
                            )}
                        >
                            Docs
                        </Link>
                        <Link
                            href="/docs/components"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                "text-foreground/60"
                            )}
                        >
                            Components
                        </Link>
                        <Link
                            href="/blocks"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                "text-foreground/60"
                            )}
                        >
                            Blocks
                        </Link>
                    </nav>
                </div>
                <div className="flex pl-16 flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>
                    <nav className="flex items-center">
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
                                )}
                            >
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
                                )}
                            >
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
