"use client"

import * as React from "react"
import { Check, Copy, Monitor, Smartphone, Tablet } from "lucide-react"

import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable"

export function BlockPreview({
    name,
    code,
    children,
}: {
    name: string
    code: string
    children: React.ReactNode
}) {
    const [isCopied, setIsCopied] = React.useState(false)
    const [view, setView] = React.useState<"desktop" | "tablet" | "mobile">("desktop")
    const [showCode, setShowCode] = React.useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    // Simplified width control instead of true draggable resize for now
    const width = {
        desktop: "100%",
        tablet: "768px",
        mobile: "375px",
    }[view]

    return (
        <div className="group relative rounded-xl border bg-background shadow-sm overflow-hidden">
            <div className="flex items-center justify-between border-b bg-muted/20 px-4 py-2">
                <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-muted-foreground">{name}</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-md border bg-background p-1 shadow-sm">
                        <button
                            onClick={() => setView("desktop")}
                            className={cn("p-1 rounded hover:bg-muted", view === "desktop" && "bg-muted")}
                        >
                            <Monitor className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setView("tablet")}
                            className={cn("p-1 rounded hover:bg-muted", view === "tablet" && "bg-muted")}
                        >
                            <Tablet className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setView("mobile")}
                            className={cn("p-1 rounded hover:bg-muted", view === "mobile" && "bg-muted")}
                        >
                            <Smartphone className="h-4 w-4" />
                        </button>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="inline-flex items-center justify-center rounded-md border bg-background p-2 text-sm font-medium shadow-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 w-8"
                    >
                        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                    <button
                        onClick={() => setShowCode(!showCode)}
                        className="inline-flex h-8 items-center justify-center rounded-md border bg-background px-3 text-xs font-medium shadow-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        {showCode ? "Preview" : "Code"}
                    </button>
                </div>
            </div>

            <div className="bg-muted/30 p-4 min-h-[400px] flex items-center justify-center overflow-auto relative">
                {showCode ? (
                    <div className="w-full h-[400px] overflow-auto bg-zinc-950 text-zinc-50 p-4 text-xs font-mono rounded-lg">
                        <pre>{code}</pre>
                    </div>
                ) : (
                    <div
                        className="bg-background shadow-lg overflow-hidden transition-all duration-300 mx-auto"
                        style={{ width }}
                    >
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}
