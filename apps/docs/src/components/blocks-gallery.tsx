"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BlockPreview } from "@/components/block-preview"
import { BLOCKS_REGISTRY } from "@/lib/blocks-registry"

import { Hero01 } from "@/components/blocks/hero-01"
import { Hero02 } from "@/components/blocks/hero-02"
import { Authentication01 } from "@/components/blocks/authentication-01"
import { Authentication02 } from "@/components/blocks/authentication-02"
import { Dashboard01 } from "@/components/blocks/dashboard-01"
import { Cards01 } from "@/components/blocks/cards-01"
import { Cards02 } from "@/components/blocks/cards-02"
import { Sidebar01 } from "@/components/blocks/sidebar-01"
import { OTP01 } from "@/components/blocks/otp-01"
import { Calendar01 } from "@/components/blocks/calendar-01"

const CATEGORIES = [
    "All",
    "featured",
    "hero",
    "authentication",
    "dashboard",
    "cards",
    "sidebar",
    "login",
    "signup",
    "otp",
    "calendar",
]

const BLOCKS = [
    { name: "hero-01", category: "hero", tags: ["featured"], component: Hero01 },
    { name: "hero-02", category: "hero", tags: ["featured"], component: Hero02 },
    { name: "authentication-01", category: "authentication", tags: ["login"], component: Authentication01 },
    { name: "authentication-02", category: "authentication", tags: ["login", "split"], component: Authentication02 },
    { name: "otp-01", category: "otp", tags: ["authentication", "featured"], component: OTP01 },
    { name: "dashboard-01", category: "dashboard", tags: ["featured", "analytics"], component: Dashboard01 },
    { name: "sidebar-01", category: "sidebar", tags: ["layout", "featured"], component: Sidebar01 },
    { name: "cards-01", category: "cards", tags: ["payment"], component: Cards01 },
    { name: "cards-02", category: "cards", tags: ["team"], component: Cards02 },
    { name: "calendar-01", category: "calendar", tags: ["ui"], component: Calendar01 },
]

export function BlocksGallery() {
    const [search, setSearch] = React.useState("")
    const [selectedCategory, setSelectedCategory] = React.useState("All")

    const filteredBlocks = React.useMemo(() => {
        return BLOCKS.filter((block) => {
            const matchesSearch = block.name.toLowerCase().includes(search.toLowerCase())
            const matchesCategory =
                selectedCategory === "All" ||
                block.category === selectedCategory ||
                block.tags?.includes(selectedCategory)

            return matchesSearch && matchesCategory
        })
    }, [search, selectedCategory])

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className="capitalize"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="relative w-full md:w-[300px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search blocks..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9"
                    />
                </div>
            </div>

            <div className="grid gap-8">
                {filteredBlocks.map((block) => {
                    const Component = block.component
                    const code = BLOCKS_REGISTRY[block.name] || "// Code not available yet"
                    return (
                        <div key={block.name} className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold capitalize">{block.name.replace("-", " ")}</h2>
                                <Badge variant="outline" className="capitalize">{block.category}</Badge>
                            </div>
                            <BlockPreview name={block.name} code={code}>
                                <Component />
                            </BlockPreview>
                        </div>
                    )
                })}
                {filteredBlocks.length === 0 && (
                    <div className="py-20 text-center text-muted-foreground">
                        No blocks found. Try a different search or category.
                    </div>
                )}
            </div>
        </div>
    )
}
