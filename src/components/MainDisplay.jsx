import { useState,useEffect } from 'react';
import coverImg from '../assets/cover.jpg'


const MainDisplay = () => {

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
      };


      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 100); // Change color after 100px scroll
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


    return(
        <>
        <div className='bg-cover bg-center h-screen w-full grid grid-rows-5 text-yellow-50' style={{backgroundImage:`url(${coverImg})`}}>
            <div style={overlayStyle} className='grid grid-rows-5 auto-rows-auto'>
                <div className='text-2xl md:text-3xl w-full'>
                    <div className={` ${isScrolled ? 'backdrop-filter backdrop-blur-md bg-opacity-10 text-black' : ''} transition-all duration-700 ease-in-out fixed flex flex-row justify-between w-full p-6`}>

                        <div><a href="">Info</a></div>
                        <div><a href="">Gallery</a></div>
                    </div>
                </div>
                <div className='p-4 md:pl-9 lg:row-start-4 md:row-start-3a row-span-1'>
                    <div className='md:text-4xl text-2xl'>We are tying the knot,</div>
                    <div className='text-7xl md:text-9xl break-words'> HAROON &nbsp;&&nbsp; NAZRIN</div>
                    
                </div>

                <div className='row-start-5 flex flex-row justify-between text-lg p-4 md:p-20 md:text-3xl'>
                    <div className=''>
                    4 August, 2024 at <br />
                        5:00 PM
                    </div>

                    <div>
                    Nattikabr <br />
    T               riprayar
                    </div>
                </div>

            </div>
        </div>
        {/* <div>halo</div> */}
        </>
    )
}

export default MainDisplay