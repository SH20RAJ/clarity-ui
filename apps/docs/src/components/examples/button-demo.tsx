import { Button } from "clarityui"
import { Mail, ArrowRight, Loader2 } from "lucide-react"

export function ButtonDemo() {
    return (
        <div className="flex flex-col gap-8 items-center text-center">
            {/* Variants */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><ArrowRight className="h-4 w-4" /></Button>
            </div>

            {/* With Icons */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </Button>
            </div>
        </div>
    )
}
