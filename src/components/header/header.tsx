"use client"
import Link from "next/link"
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Blog_link,About, Initial_blog } from "@/utils/Enlaces/Links";
import { TbXboxXFilled } from "react-icons/tb";
import DarkButton from '@/utils/Darkbutton'
import '@/css/Blog-Inicial/header/header.css'
import '@/css/darktheme/ThemeDark.css'

export default function Header() {

    // aside pushbar responsive // 
    const [IsMenuActive, SetMenuActive] = useState(false);

    const ToggleMenu = () => {
        SetMenuActive(!IsMenuActive);
    }

    const CloseMenu = () => {
        SetMenuActive(false);
    }

    return (
        <>
            <header className="bg-white text-black p-[3px] SystemFont sticky top-0 shadow-header z-[100]">
                <div className="flex justify-between items-center w-[80%] marginCenter text-lg">
                    <div className="flex items-center">
                        <img src="https://www.zarla.com/images/zarla-i-1x1-2400x2400-20211118-4rgftk8pf7p6byhpfyv8.png?crop=1:1,smart&width=250&dpr=2" alt="Logo" className="h-auto w-11" />
                        <h2 className="text-[22px]">
                            Mundo Paloma
                        </h2>
                    </div>
                    <div className="lg:hidden">
                        <IoMdMenu onClick={ToggleMenu} />
                    </div>
                    <div className="max-lg:hidden flex gap-5 items-center text-[15px]">
                        <nav>
                            <ol className="flex gap-9 items-center">
                                <li><Link href="/">Inicio</Link></li>
                                <li><Link href={Blog_link}>Blog</Link></li>
                                <li><Link href="#">Sobre la página</Link></li>
                            </ol>
                        </nav>
                        <div>
                            <DarkButton/>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`nav-responsive${IsMenuActive ? '-active' : ''}`}>
                <nav>
                    <TbXboxXFilled className="h-auto w-[30px]" onClick={CloseMenu} />
                    <ol className="nav-col flex gap-9 items-center">
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href={Blog_link}>Blog</Link></li>
                        <li><Link href="#">Sobre la página</Link></li>
                        <DarkButton/>
                    </ol>
                </nav>
            </div>
        </>
    )
}