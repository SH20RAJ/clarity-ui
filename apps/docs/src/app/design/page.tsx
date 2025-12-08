
import Link from "next/link"
import { Button } from "clarityui"
import { ArrowRight } from "lucide-react"

export default function DesignSystemPage() {
    return (
        <div className="container max-w-4xl py-20 space-y-24">
            {/* Header */}
            <section className="space-y-6">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-6xl">
                    The Clarity Way
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    We didn't just build a library. We built a system for focus.
                    Clarity UI is an opinionated collection of primitives designed to look
                    perfect out of the box, so you can focus on building your product.
                </p>
            </section>

            {/* Principles */}
            <section className="grid gap-12 sm:grid-cols-3">
                <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Subtlety first</h3>
                    <p className="text-sm text-muted-foreground leading-loose">
                        Interfaces should recede. We use high-contrast borders and subtle backgrounds
                        to create depth without noise.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Type is Interface</h3>
                    <p className="text-sm text-muted-foreground leading-loose">
                        We rely on font weight and size hierarchy rather than color to define structure.
                        Content is king.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Motion with meaning</h3>
                    <p className="text-sm text-muted-foreground leading-loose">
                        Animations are fast, imperceptible, and used only to guide the eye.
                        No bounce, no fluff.
                    </p>
                </div>
            </section>

            {/* Color Palette */}
            <section className="space-y-8">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">Neutrality</h2>
                <p className="text-muted-foreground">
                    Our palette is intentionally limited. We use a modified Zinc scale that
                    drifts slightly blue in dark mode for better contrast on OLED screens.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => (
                        <div key={step} className="space-y-2">
                            <div
                                className="h-16 w-full rounded-md border"
                                style={{ backgroundColor: `var(--zinc-${step})` }} // Simplified, in real app we'd map to tailwind class
                            />
                            <div className="bg-zinc-100 dark:bg-zinc-900 h-12 w-full rounded-md border flex items-center justify-center text-xs font-mono text-muted-foreground">
                                zinc-{step}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Typography */}
            <section className="space-y-8">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">Typography</h2>
                <div className="space-y-8 border-l-2 pl-6">
                    <div className="space-y-1">
                        <span className="text-sm text-muted-foreground font-mono">Heading 1</span>
                        <div className="text-4xl font-bold tracking-tighter">The quick brown fox</div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm text-muted-foreground font-mono">Heading 2</span>
                        <div className="text-2xl font-semibold tracking-tight">Jumps over the lazy dog</div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm text-muted-foreground font-mono">Body</span>
                        <div className="text-base text-muted-foreground leading-7">
                            Minimalism is not a lack of something. It’s simply the perfect amount of something.
                            Structure, negative space, and typography are the three pillars we stand on.
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 border-t">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-2xl font-bold">Ready to build?</h2>
                    <Link href="/docs">
                        <Button size="lg" className="rounded-full px-8">
                            Read the Docs <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
