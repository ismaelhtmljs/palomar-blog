"use client"
import { useState,useEffect } from "react";

export default function DarkButton() {

    const [theme, setThemeColor] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark"
        }else{
            return "light"
        }
    });

    useEffect(()=>{
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.remove('dark')
        }
    },[theme]);

    const DarkToggle = () => {
        setThemeColor((ThemeColor) => ThemeColor === 'light' ? 'dark':'light')
    }

    return(
        <button type="button" onClick={DarkToggle}>Cambiar a tema <span>{theme === 'light' ? 'oscuro':'claro'}</span></button>
    )
}
