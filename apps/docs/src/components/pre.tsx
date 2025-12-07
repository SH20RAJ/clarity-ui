"use client"

import * as React from "react"
import { CopyButton } from "@/components/copy-button"

export function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
    const preRef = React.useRef<HTMLPreElement>(null)
    const [code, setCode] = React.useState("")

    React.useEffect(() => {
        if (preRef.current) {
            // Extract text content from the code block
            setCode(preRef.current.textContent || "")
        }
    }, [children])

    return (
        <div className="relative">
            <div className="absolute right-4 top-4 z-20">
                <CopyButton value={code} />
            </div>
            <pre ref={preRef} {...props}>
                {children}
            </pre>
        </div>
    )
}
