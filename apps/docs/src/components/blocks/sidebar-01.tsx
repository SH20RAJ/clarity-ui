"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {
    LayoutDashboard,
    Settings,
    User,
    CreditCard,
    Bell,
    LogOut,
    Menu,
    PlusCircle,
    FileText,
} from "lucide-react"

export function Sidebar01() {
    return (
        <div className="flex h-[600px] w-full border rounded-xl bg-background overflow-hidden">
            <div className="w-[250px] border-r bg-muted/20 flex flex-col gap-2 p-4">
                <Button variant="outline" className="justify-start gap-2">
                    <PlusCircle className="h-4 w-4" />
                    New Project
                </Button>
                <div className="py-2">
                    <h3 className="mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground">
                        Discover
                    </h3>
                    <div className="space-y-1">
                        <Button variant="secondary" className="w-full justify-start gap-2">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <FileText className="h-4 w-4" />
                            Documents
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                        </Button>
                    </div>
                </div>
                <div className="py-2">
                    <h3 className="mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground">
                        Library
                    </h3>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <User className="h-4 w-4" />
                            Profile
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <CreditCard className="h-4 w-4" />
                            Billing
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Bell className="h-4 w-4" />
                            Notifications
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-8">
                <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
                <p className="text-muted-foreground">Here is an overview of your projects.</p>
            </div>
        </div>
    )
}
