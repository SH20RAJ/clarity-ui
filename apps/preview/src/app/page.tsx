import { Button } from "clarityui";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full bg-[#fcfcfc] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">

            {/* Sidebar / Navigation */}
            <aside className="hidden w-64 border-r border-neutral-200/50 bg-[#fbfbfb] dark:border-neutral-800 dark:bg-neutral-900/50 lg:block fixed h-full inset-y-0 left-0 p-6">
                <div className="flex items-center gap-2 mb-8 px-2">
                    <div className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-white" />
                    <span className="text-sm font-semibold tracking-tight">Clarity UI</span>
                </div>
                <nav className="space-y-1">
                    {["Introduction", "Installation", "Theming"].map((item) => (
                        <button key={item} className="w-full text-left px-2 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/50">
                            {item}
                        </button>
                    ))}
                    <div className="pt-4 pb-2 px-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</div>
                    {["Button", "Card", "Input", "Badge"].map((item) => (
                        <button key={item} className="w-full text-left px-2 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/50">
                            {item}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:pl-64">
                <div className="max-w-4xl mx-auto px-8 py-12 lg:py-24">

                    <div className="space-y-6 mb-16">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-neutral-900 dark:text-white">
                            Build your component library.
                        </h1>
                        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed dark:text-neutral-400">
                            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <Button size="lg" className="rounded-full px-8">Get Started</Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 bg-white dark:bg-neutral-950">GitHub</Button>
                        </div>
                    </div>

                    <div className="border border-neutral-200/60 dark:border-neutral-800 rounded-xl p-12 flex items-center justify-center gap-4 bg-white dark:bg-neutral-900/50 shadow-sm min-h-[300px]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex gap-4">
                                <Button>Primary Button</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                            </div>
                            <span className="text-xs text-neutral-400 mt-4">More components coming soon...</span>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
