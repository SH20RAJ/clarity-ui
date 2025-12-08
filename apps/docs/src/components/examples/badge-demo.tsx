"use client"

import { Badge } from "clarityui"

export function BadgeDemo() {
    return (
        <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
        </div>
    )
}
