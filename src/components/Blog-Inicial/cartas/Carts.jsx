"use client"
import '@/css/style.css'

export default function Carts() {
    return (
        <>
            {/* parte de las cartas */}
            <div className='w-full'>
                <div className='w-full'>
                    <div className='flex flex-col items-center gap-10'>
                        {/* carta 1 */}
                        <div className='style-border-cart cart-responsive flex gap-4 p-2'>
                            <div>
                                {/* img */}
                                <img src="/images/cartas-images/Paloma-cart1.jpg" className='img-cart-size' alt="foto de una paloma normal" loading='lazy' />
                            </div>
                            {/*  */}
                            <div>
                                <div className='mt-3'>
                                    {/*  */}
                                    <div>
                                        <p className='text-sm text-gray-600 dark-style'>Las Palomas</p>
                                        <span className='text-gray-500 dark-style-des text-sm flex items-center'>10 de Febrero 2025 | • Concepto simple</span>
                                    </div>
                                    <hr className='hr-style-global' />
                                    {/*  */}
                                    <div>
                                        <div className='cart-a hover:text-blue-400 w-carts'>
                                            <a href="#">
                                                Paloma Doméstica <br /> Esta ave es común en las ciudades y pueblos de todo el mundo. Se adapta fácilmente a diferentes entornos urbanos y suele anidar en edificios, puentes y otras estructuras.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* carta 2 */}
                        <div className='style-border-cart cart-responsive flex gap-4 p-2'>
                            <div>
                                {/* img */}
                                <img src="/images/cartas-images/Paloma-raza.jpg" className='img-cart-size' alt="imagen de una paloma de distinta raza" loading='lazy' />
                            </div>
                            {/*  */}
                            <div>
                                <div className='mt-3'>
                                    {/*  */}
                                    <div>
                                        <p className='text-sm text-gray-600 dark-style'>Tipo de Razas de las palomas</p>
                                        <span className='text-gray-500 dark-style-des text-sm flex items-center'>12 de Febrero 2025 | • Razas de palomas</span>
                                    </div>
                                    <hr className='hr-style-global' />
                                    {/*  */}
                                    <div>
                                        <div className='cart-a hover:text-blue-400 w-carts'>
                                            <a href="#">
                                                Razas de palomas <br /> Las palomas o colúmbidas (Columbidae) son una familia de aves del orden de las columbiformes con un total de 308 especies.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* carta 3 */}
                        <div className='style-border-cart cart-responsive flex gap-4 p-2'>
                            <div>
                                {/* img */}
                                <img src="/images/cartas-images/Paloma-caracteristica.jpg" className='img-cart-size' alt="imagen de las características de una paloma" loading='lazy' />
                            </div>
                            {/*  */}
                            <div>
                                <div className='mt-3'>
                                    {/*  */}
                                    <div>
                                        <p className='text-sm text-gray-600 dark-style'>Características de las palomas</p>
                                        <span className='text-gray-500 dark-style-des text-sm flex items-center'>13 de Febrero 2025 | • Caracteristicas simple</span>
                                    </div>
                                    <hr className='hr-style-global' />
                                    {/*  */}
                                    <div>
                                        <div className='cart-a hover:text-blue-400 w-carts'>
                                            <a href="#">
                                                Características de las palomas <br /> Estas aves tan comunes en nuestras ciudades forman parte del Género Columba.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* carta 4 */}
                        <div className='style-border-cart cart-responsive flex gap-4 p-2'>
                            <div>
                                {/* img */}
                                <img src="/images/cartas-images/Paloma-enferma.jpg" className='img-cart-size' alt="imagen de una paloma enferma" loading='lazy' />
                            </div>
                            {/*  */}
                            <div>
                                <div className='mt-3'>
                                    {/*  */}
                                    <div>
                                        <p className='text-sm text-gray-600 dark-style'>Tipo de enfermedades de las palomas</p>
                                        <span className='text-gray-500 dark-style-des text-sm flex items-center'>14 de Febrero 2025 | • Enfermedades comunes</span>
                                    </div>
                                    <hr className='hr-style-global' />
                                    {/*  */}
                                    <div>
                                        <div className='cart-a hover:text-blue-400 w-carts'>
                                            <a href="#">
                                                Tipos de enfermedades que transmiten las palomas <br /> Los tipos de enfermedades que transmiten las palomas son numerosos y su afección puede ser menos o más importante dependiendo de si afectan a ganado o a humanos, la edad, las condiciones de salud, etc.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}