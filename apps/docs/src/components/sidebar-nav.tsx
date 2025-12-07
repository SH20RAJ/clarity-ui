"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"

export function DocsSidebar() {
    const pathname = usePathname()

    return (
        <div className="w-full">
            {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="pb-4">
                    <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                        {item.title}
                    </h4>
                    {item.items?.length ? (
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            {item.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground",
                                        pathname === item.href
                                            ? "font-medium text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}
