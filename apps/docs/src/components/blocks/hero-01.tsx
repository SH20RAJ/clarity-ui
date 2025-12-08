"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero01() {
    return (
        <section className="container flex flex-col items-center gap-6 py-24 text-center md:py-32">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                New Features Available
                <ArrowRight className="ml-1 h-4 w-4" />
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                Building Blocks for the Web
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-2xl">
                Beautifully designed, ready-to-use components. <br className="hidden sm:inline" />
                Copy and paste into your apps. Open Source and Free.
            </p>
            <div className="flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                    View Documentation
                </Button>
            </div>
        </section>
    )
}
