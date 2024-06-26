import img1 from "../assets/functionInfo.jpg"
import img2 from "../assets/3.jpeg"
import img3 from "../assets/A001.jpg"
import img4 from "../assets/A02.jpg"
import img5 from "../assets/cover.jpg"
import img6 from "../assets/info.jpg"
import img7 from "../assets/invite_img.jpeg"
import img8 from "../assets/story.jpg"
import { useState, useEffect } from "react"
import Footer from "./Footer"


function GalleryPage() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100); // Change color after 100px scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        <>
            <div>
                <div className="">
                    <div className='text-2xl md:text-3xl w-full'>
                        <div className={` ${isScrolled ? 'backdrop-filter backdrop-blur-md bg-opacity-10 text-black' : ''} transition-all duration-700 ease-in-out fixed flex flex-row justify-between w-full p-6`}>

                            <div><a href="/">Home</a></div>
                            <div><a href="/gallery">Gallery</a></div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className=" pt-20 md:pt-24 p-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8">
                        <img src={img1} alt="" loading="lazy" />
                        <img src={img2} alt="" loading="lazy" />
                        <img src={img3} alt="" loading="lazy" />
                        <img src={img4} alt=""  loading="lazy"/>
                        <img src={img5} alt=""  loading="lazy"/>
                        <img src={img6} alt=""  loading="lazy"/>
                        <img src={img7} alt=""  loading="lazy"/>
                        <img src={img8} alt=""  loading="lazy"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default GalleryPage