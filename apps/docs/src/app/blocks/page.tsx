import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Hero01 } from "@/components/blocks/hero-01"
import { Hero02 } from "@/components/blocks/hero-02"
import { Authentication01 } from "@/components/blocks/authentication-01"
import { Authentication02 } from "@/components/blocks/authentication-02"
import { Dashboard01 } from "@/components/blocks/dashboard-01"
import { Cards01 } from "@/components/blocks/cards-01"
import { Cards02 } from "@/components/blocks/cards-02"

export const metadata: Metadata = {
    title: "Blocks",
    description: "Beautifully designed, ready-to-use building blocks for your next project.",
}

export default function BlocksPage() {
    return (
        <div className="container py-10">
            <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2 pt-8 text-center md:items-center md:text-left">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                    Building Blocks
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    Beautifully designed, ready-to-use components. <br className="hidden sm:inline" />
                    Copy and paste into your apps. Works with all Clarity UI components.
                </p>
            </div>
            <div className="grid gap-12 py-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Hero</h2>
                    <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
                        <Hero01 />
                    </div>
                    <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
                        <Hero02 />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Authentication</h2>
                    <div className="flex min-h-[400px] items-center justify-center rounded-xl border bg-muted/30 shadow-sm p-4">
                        <Authentication01 />
                    </div>
                    <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
                        <Authentication02 />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Cards</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-center justify-center rounded-xl border bg-muted/30 shadow-sm p-4">
                            <Cards01 />
                        </div>
                        <div className="flex items-center justify-center rounded-xl border bg-muted/30 shadow-sm p-4">
                            <Cards02 />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
                        <Dashboard01 />
                    </div>
                </div>
            </div>
        </div>
    )
}
