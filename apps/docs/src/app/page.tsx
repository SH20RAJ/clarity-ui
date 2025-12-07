

export default function Home() {
    return (
        <div className="flex min-h-screen w-full bg-[#fcfcfc] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">

            {/* Sidebar / Navigation */}
            <aside className="hidden w-64 border-r border-neutral-200/50 bg-[#fbfbfb] dark:border-neutral-800 dark:bg-neutral-900/50 lg:block fixed h-full inset-y-0 left-0 p-6">
                <div className="flex items-center gap-2 mb-8 px-2">
                    <div className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-white" />
                    <span className="text-sm font-semibold tracking-tight">Clarity UI Docs</span>
                </div>
                <nav className="space-y-1">
                    {["Getting Started", "Installation", "CLI", "Theming"].map((item) => (
                        <button key={item} className="w-full text-left px-2 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/50">
                            {item}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:pl-64">
                <div className="max-w-3xl mx-auto px-8 py-12 lg:py-24">
                    <h1 className="text-4xl font-bold mb-6">Documentation</h1>
                    <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
                        Welcome to the official documentation for Clarity UI. A modern, minimalist component library built for speed and aesthetics.
                    </p>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <h2>Installation</h2>
                        <pre className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg overflow-x-auto border border-neutral-200 dark:border-neutral-800">
                            <code>npx clarityui init</code>
                        </pre>

                        <h2 className="mt-8">Adding Components</h2>
                        <p>You can add components to your project using the CLI:</p>
                        <pre className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg overflow-x-auto border border-neutral-200 dark:border-neutral-800">
                            <code>npx clarityui add button</code>
                        </pre>
                    </div>
                </div>
            </main>
        </div>
    );
}
