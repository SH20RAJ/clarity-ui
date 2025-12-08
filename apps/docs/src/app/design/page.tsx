
import Link from "next/link"
import { Button } from "clarityui"
import { ArrowRight, Check } from "lucide-react"

export default function DesignSystemPage() {
    return (
        <div className="container max-w-6xl py-20 space-y-32">
            {/* Header */}
            <section className="space-y-6 max-w-3xl">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-6xl">
                    Design System
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Clarity UI is built on a set of core principles and tokenized values.
                    This system ensures consistency, accessibility, and speed across all applications.
                    It is designed to be invisible, letting your content take center stage.
                </p>
            </section>

            <hr className="border-border/40" />

            {/* Philosophy */}
            <section className="space-y-12">
                <h2 className="font-heading text-3xl font-bold tracking-tight">Philosophy</h2>
                <div className="grid gap-12 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">Subtlety first</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Interfaces should recede. We use high-contrast borders and subtle backgrounds
                            to create depth without noise. Shadows are used sparingly.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">Type is Interface</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We rely on font weight and size hierarchy rather than color to define structure.
                            Text varies in purpose: headings lead, body informs, and captions support.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">Motion with meaning</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Animations are fast (150ms-300ms), imperceptible, and used only to guide the eye or provide feedback.
                            No bounce, no fluff.
                        </p>
                    </div>
                </div>
            </section>

            {/* Colors */}
            <section className="space-y-12">
                <div className="space-y-4">
                    <h2 className="font-heading text-3xl font-bold tracking-tight">Color Palette</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        We use strict semantic tokens mapped to a neutral scale. In light mode, we use Zinc.
                        In dark mode, we drift slightly blue-gray for better contrast on OLED screens.
                    </p>
                </div>

                <div className="space-y-8">
                    <h3 className="text-lg font-semibold">Base Scale (Zinc)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => (
                            <div key={step} className="space-y-2">
                                <div
                                    className="h-16 w-full rounded-md border shadow-sm"
                                    style={{ backgroundColor: `hsl(var(--zinc-${step}, 0 0% ${100 - (step / 10)}%))` }}
                                // Note: Real implementation would rely on configured CSS variables. 
                                // For this demo page, we might not have all raw tokens exposed as classes, so we rely on semantics below.
                                />
                                <div className={`h-12 w-full rounded-md border flex items-center justify-center text-xs font-mono text-muted-foreground bg-zinc-${step}`}>
                                    {step}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground">* Note: This is an approximation. We use standard Tailwind Zinc.</p>
                </div>
                <p className="text-lg text-muted-foreground">
                    Clarity UI is built on a foundation of simplicity, accessibility, and visual harmony.
                    Our core philosophy is <span className="font-bold text-foreground">*MINIMAL</span>.
                    We believe in:
                </p>        <div className="space-y-8">
                    <h3 className="text-lg font-semibold">Semantic Tokens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="h-24 rounded-md bg-background border flex items-center justify-center text-foreground font-medium shadow-sm">Background</div>
                            <span className="text-xs font-mono text-muted-foreground">bg-background</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-md bg-muted flex items-center justify-center text-muted-foreground font-medium">Muted</div>
                            <span className="text-xs font-mono text-muted-foreground">bg-muted</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-medium shadow-sm">Primary</div>
                            <span className="text-xs font-mono text-muted-foreground">bg-primary</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground font-medium">Secondary</div>
                            <span className="text-xs font-mono text-muted-foreground">bg-secondary</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-md bg-destructive flex items-center justify-center text-destructive-foreground font-medium shadow-sm">Destructive</div>
                            <span className="text-xs font-mono text-muted-foreground">bg-destructive</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-md bg-accent flex items-center justify-center text-accent-foreground font-medium">Accent</div>
                            <span className="text-xs font-mono text-muted-foreground">bg-accent</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="space-y-12">
                <h2 className="font-heading text-3xl font-bold tracking-tight">Typography</h2>
                <div className="flex flex-col gap-8 md:flex-row md:gap-24">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-muted-foreground">font-heading (Inter)</span>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                The quick brown fox
                            </h1>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-muted-foreground">Heading Level 2</span>
                            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                Jumps over the lazy dog
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-muted-foreground">Heading Level 3</span>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Sphinx of black quartz
                            </h3>
                        </div>
                    </div>
                    <div className="flex-1 space-y-8">
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-muted-foreground">Body</span>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Good typography makes the interface dissolve. We typically use Inter, configured with
                                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">font-feature-settings</code> to
                                enable tabular numbers in data tables and stylistic sets for structured legibility.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-muted-foreground">Blockquote</span>
                            <blockquote className="mt-6 border-l-2 pl-6 italic">
                                "Simplicity is the ultimate sophistication."
                            </blockquote>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-muted-foreground">List</span>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                <li>Consistent line-height (leading-7)</li>
                                <li>High contrast text (foreground)</li>
                                <li>Subtle supporting text (muted-foreground)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Radii */}
            <section className="space-y-12">
                <h2 className="font-heading text-3xl font-bold tracking-tight">Radii</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-4 text-center">
                        <div className="h-24 w-24 mx-auto border-2 border-dashed border-primary/50 bg-primary/10 rounded-sm" />
                        <code className="text-xs bg-muted px-2 py-1 rounded">rounded-sm</code>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="h-24 w-24 mx-auto border-2 border-dashed border-primary/50 bg-primary/10 rounded-md" />
                        <code className="text-xs bg-muted px-2 py-1 rounded">rounded-md</code>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="h-24 w-24 mx-auto border-2 border-dashed border-primary/50 bg-primary/10 rounded-lg" />
                        <code className="text-xs bg-muted px-2 py-1 rounded">rounded-lg</code>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="h-24 w-24 mx-auto border-2 border-dashed border-primary/50 bg-primary/10 rounded-full" />
                        <code className="text-xs bg-muted px-2 py-1 rounded">rounded-full</code>
                    </div>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    We default to <code className="text-xs bg-muted px-2 py-1 rounded">rounded-xl</code> or <code className="text-xs bg-muted px-2 py-1 rounded">0.5rem</code> (8px) for cards and inputs to create a softer, more modern friendliness without feeling bubbly.
                </p>
            </section>

            <section className="py-12 border-t">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-2xl font-bold">Ready to implement?</h2>
                    <Link href="/docs">
                        <Button size="lg" className="rounded-full px-8">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
