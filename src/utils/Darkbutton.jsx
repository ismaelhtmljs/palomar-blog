"use client"
import { useState, useEffect } from "react";

export default function DarkButton() {

    const [theme, setThemeColor] = useState(null);

    useEffect(() => {
        const UploadTheme = () => {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setThemeColor('dark')
            }else{
                setThemeColor('light')
            }
        }
        UploadTheme();

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",UploadTheme);
        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",UploadTheme);
        }
    },[])

    useEffect(() => {
        if (theme) {
            if (theme === "dark") {
                document.querySelector('html').classList.add('dark')
            } else {
                document.querySelector('html').classList.remove('dark')
            }
        }
    }, [theme]);

    const DarkToggle = () => {
        setThemeColor((ThemeColor) => ThemeColor === 'light' ? 'dark' : 'light')
    }

    return (
        <>
        <button type="button" onClick={DarkToggle} className={`style-button${theme === 'light' ? '-dark':'-light'}`}><p>Cambiar a tema <span>{theme === 'light' ? 'oscuro' : 'claro'}</span></p></button>
        </>
    )
}
