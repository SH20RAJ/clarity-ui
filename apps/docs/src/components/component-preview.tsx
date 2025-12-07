"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "clarityui" // Using library components
import { cn } from "@/lib/utils"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    align?: "center" | "start" | "end"
    children: React.ReactNode // The code block
}

import * as ClarityUI from "clarityui"

export function ComponentPreview({
    name,
    children,
    className,
    align = "center",
    ...props
}: ComponentPreviewProps) {

    // Dynamically access component from library
    // In real app, we might need a map or passed component
    // For now, we assume names match export
    const Component = (ClarityUI as any)[name]

    return (
        <div
            className={cn("group relative my-4 flex flex-col space-y-2", className)}
            {...props}
        >
            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                <div className="flex items-center justify-between pb-3">
                    <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                        <TabsTrigger
                            value="preview"
                            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Preview
                        </TabsTrigger>
                        <TabsTrigger
                            value="code"
                            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Code
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="preview" className="relative rounded-md border">
                    <div
                        className={cn(
                            "preview flex min-h-[350px] w-full justify-center p-10 items-center",
                            {
                                "items-center": align === "center",
                                "items-start": align === "start",
                                "items-end": align === "end",
                            }
                        )}
                    >
                        {Component ? <Component /> : <div className="text-muted-foreground">Component {name} not found</div>}
                    </div>
                </TabsContent>
                <TabsContent value="code">
                    <div className="flex flex-col space-y-4">
                        <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                            {children}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
