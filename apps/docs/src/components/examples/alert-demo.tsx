"use client"

import { Terminal, Waves } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "clarityui"

export function AlertDemo() {
    return (
        <div className="w-full max-w-sm space-y-4">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <Waves className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
        </div>
    )
}
