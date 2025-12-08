import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "clarityui"
import { ArrowRight, Copy, Terminal, Layout, MousePointer2 } from "lucide-react"

export default function IndexPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero: Radical Minimalism. Centered. Big Type. */}
            <section className="flex flex-col items-center justify-center space-y-10 py-32 md:py-48 lg:py-48 text-center px-4">

                <Link href="/design" className="group flex items-center rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted">
                    <span className="block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                    The Design Philosophy
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>

                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                    Minimal. Clean. <br className="hidden sm:inline" />
                    Accessible. Visually Appealing.
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-2xl">
                    UI Components with Ease. Built for speed and consistency. <br />
                    <span className="font-semibold text-foreground">*MINIMAL</span> is our core philosophy.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <Link href="/docs">
                        <Button size="lg" className="h-12 px-8 rounded-full text-base">
                            Get Started
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2 rounded-full border bg-background px-4 h-12 text-sm font-mono text-muted-foreground">
                        <span className="text-primary font-bold">{">"}</span>
                        npx clarityui add button
                        <Copy className="ml-4 h-4 w-4 cursor-pointer hover:text-foreground transition-colors" />
                    </div>
                </div>

            </section>

            {/* Visual Break / Divider */}
            <div className="container max-w-6xl">
                <hr className="border-border/40" />
            </div>

            {/* Bento Grid / Feature Section */}
            <section className="container max-w-6xl py-24 space-y-24">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Large */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl border bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 sm:p-12">
                        <div className="space-y-4 max-w-lg relative z-10">
                            <h3 className="text-3xl font-bold tracking-tight">Engineered for focus.</h3>
                            <p className="text-muted-foreground text-lg">
                                Every component is designed to behave predictably. No layout shifts. No console warnings.
                                Just pure, type-safe React code.
                            </p>
                        </div>
                        {/* Abstract visual decoration */}
                        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                            <Layout size={300} strokeWidth={0.5} />
                        </div>
                    </div>

                    {/* Card 2: Tall */}
                    <div className="col-span-1 relative overflow-hidden rounded-2xl border bg-background p-8">
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex items-center justify-center py-12">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                                    <Terminal size={64} className="relative z-10 text-primary" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">CLI First</h3>
                                <p className="text-sm text-muted-foreground">
                                    Update, add, and manage components directly from your terminal. Use <code className="bg-muted px-1 py-0.5 rounded">npx clarityui</code>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-span-1 relative overflow-hidden rounded-2xl border bg-background p-8">
                        <div className="space-y-2">
                            <MousePointer2 className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold">Micro-interactions</h3>
                            <p className="text-sm text-muted-foreground">
                                Subtle hover states and click effects that feel "premium" without feeling slightly slow.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Wide */}
                    <div className="col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl border bg-zinc-950 text-zinc-50 p-8 sm:p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Open Source & Free</h3>
                                <p className="text-zinc-400">
                                    MIT Licensed. Use it for personal projects, commercial dashboards, or anything in between.
                                </p>
                            </div>
                            <Link href={siteConfig.links.github} target="_blank">
                                <Button variant="secondary" size="lg" className="rounded-full">
                                    Star on GitHub
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer / CTA */}
            <section className="container max-w-4xl py-24 text-center border-t border-border/40">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Stop building from scratch.</h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                    Join thousands of developers who are shipping faster with clarity.
                    The best layout primitives, simpler than ever.
                </p>
                <Link href="/docs">
                    <Button size="lg" className="rounded-full h-14 px-10 text-lg">
                        Start Building
                    </Button>
                </Link>
            </section>
        </div>
    )
}
