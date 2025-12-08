"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "clarityui"

export function AvatarDemo() {
    return (
        <div className="flex gap-4 items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
    )
}
