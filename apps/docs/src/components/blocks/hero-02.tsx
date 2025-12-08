"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Hero02() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-4">
                        <h1 className="text-4xl font-bold tracking-tight">Design with speed</h1>
                        <p className="text-xl text-muted-foreground">
                            Clarity UI helps you build beautiful websites 10x faster.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg">Get Started</Button>
                            <Button size="lg" variant="outline">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block relative">
                <Image
                    src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3"
                    alt="Image"
                    fill
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
