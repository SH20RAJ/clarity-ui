import { Metadata } from "next"
import { BlocksGallery } from "@/components/blocks-gallery"

export const metadata: Metadata = {
    title: "Blocks",
    dion: "Beautifully designed, ready-to-use building blocks for your next project.",
}

export default function BlocksPage() {
    return (
        <div className="container py-10">
            <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2 pt-8 text-center md:items-center md:text-left mb-10">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                    Building Blocks
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    Beautifully designed, ready-to-use components. <br className="hidden sm:inline" />
                    Copy and paste into your apps. Works with all Clarity UI components.
                </p>
            </div>
            <BlocksGallery />
        </div>
    )
}
