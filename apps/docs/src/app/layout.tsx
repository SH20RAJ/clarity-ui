import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
    ],
    authors: [
        {
            name: "sh20raj",
            url: "https://twitter.com/sh20raj",
        },
    ],
    creator: "sh20raj",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

import { TooltipProvider } from "clarityui"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <div className="relative flex min-h-screen flex-col bg-background">
                            <SiteHeader />
                            <main className="flex-1">{children}</main>
                        </div>
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
