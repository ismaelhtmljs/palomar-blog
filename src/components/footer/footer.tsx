"use client"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {

    const ToggleGithub = () => {
        window.open('https://github.com/ismaelhtmljs/palomar-blog')
    }

    const ToggleInstagram = () => {
        window.open('https://www.instagram.com/ismaelxd74/?hl=es')
    }

    return (
        <footer className="bg-black text-white p-3">
            <div className="flex justify-center flex-col gap-4 p-3">
                <div className="text-center">
                    <h1 className="FondKsTLO2 text-2xl font-semibold font-sans flex items-center justify-between gap-2">
                        <div>
                            <span>Redes Sociales</span>
                        </div>
                        <div>
                            PALOMAS <span className="font-normal"><em>para</em></span> VIVIR
                        </div> 
                        <div>
                            <span>&copy;copyright</span>
                        </div>
                    </h1>
                </div>
                <div className="p-2">
                    <div className="flex items-center justify-between ">
                        <div className="bos-size-footer">
                            <div className="flex gap-3">
                                <FaGithub className="cursor-pointer size-icon" onClick={ToggleGithub} />
                                <FaInstagram className="cursor-pointer size-icon" onClick={ToggleInstagram} />
                            </div>
                        </div>
                        <div className="bos-size-footer">
                            <div>
                                <p>Este sitio web fue creado con la intención de informar y ayudar a solucionar enfermedades de las palomas.</p>
                            </div>
                        </div>
                        <div className="bos-size-footer">
                            <div>
                                <p>&copy;Copyright by Ismaelxd74 official License from 2024-2058</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}