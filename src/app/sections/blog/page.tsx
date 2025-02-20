"use client"
import Header from "@/components/header/header";
import Carts from "@/components/Blog-Inicial/cartas/Carts";
import Footer from "@/components/footer/footer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '@/css/Blog-Inicial/responsive/responsive.css';

export default function Blog() {
    const images = [
        {
            original: "/images/side-img/paloma_Image.jpg",
            thumbnail: "/images/side-img/paloma_Image.jpg",
        },
        {
            original: "/images/side-img/paloma_Image2.jpg",
            thumbnail: "/images/side-img/paloma_Image2.jpg",
        },
        {
            original: "/images/side-img/paloma_Image3.jpg",
            thumbnail: "/images/side-img/paloma_Image3.jpg",
        },
        {
            original: "/images/side-img/paloma_Image4.jpg",
            thumbnail: "/images/side-img/paloma_Image4.jpg",
        },
    ]
    return (
        <>
            <div className="Opacity-animation">
                <div>
                    <div>
                        <Header />
                        <main className='mb-5'>
                            <div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <div>
                                            <div className="mt-10 mb-10">
                                                <ImageGallery items={images}
                                                    showThumbnails = {false}
                                                    showPlayButton = {false}
                                                    showNav = {true}
                                                    showFullscreenButton = {false}
                                                    infinite = {true}
                                                    autoPlay = {true}
                                                    showBullets = {true}
                                                    slideInterval= {2000}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Carts/>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}