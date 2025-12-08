"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function Calendar01() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <Card className="max-w-[350px]">
            <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>
                    A component for managing dates and schedules.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex justify-center pb-4">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                />
            </CardContent>
        </Card>
    )
}
