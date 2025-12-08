
import Link from "next/link"
import { Button } from "clarityui"

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-4xl font-bold">404 - Not Found</h2>
            <p className="text-muted-foreground">The page you requested does not exist.</p>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    )
}
