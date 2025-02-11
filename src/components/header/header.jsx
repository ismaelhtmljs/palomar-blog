import Link from "next/link"

export default function Header() {
    return(
        <header className="bg-white text-black p-3 SystemFont sticky top-0">
            <div className="flex justify-between items-center w-[80%] marginCenter text-lg">
                <div className="flex items-center">
                    <img src="https://www.zarla.com/images/zarla-i-1x1-2400x2400-20211118-4rgftk8pf7p6byhpfyv8.png?crop=1:1,smart&width=250&dpr=2" alt="Logo" className="h-auto w-11"/>
                    <h2 className="text-2xl">
                        Mundo Paloma
                    </h2>
                </div>
                <div>
                    <nav>
                        <ol className="flex gap-9 items-center">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Sobre la página</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}