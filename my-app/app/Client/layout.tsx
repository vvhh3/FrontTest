

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-1 bg-black">
            <nav className="w-full h-10 bg-white">

            </nav>
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}