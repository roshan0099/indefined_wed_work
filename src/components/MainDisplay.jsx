import { useState, useEffect } from 'react';
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

    const [infoClick, setInfoClick] = useState(false)

    function clicked() {
        setInfoClick(!infoClick)
        // setIsScrolled(!isScrolled)
    }

    return (
        <>
            <div className='bg-cover bg-center h-screen relative text-yellow-50' style={{ backgroundImage: `url(${coverImg})` }}>

                    <div className={` fixed mt-16 z-50 h-full w-full ${infoClick ? 'opacity-100 backdrop-blur-2xl bg-opacity-10 text-black ' : 'transform -translate-x-32 opacity-0'} transition-all ease-in-out duration-700 flex flex-col items-center p-14 gap-11`}>
                        <div className='text-3xl md:text-4xl'>
                            Your presence will make our celebration even more memorable.
                        </div>
                        <div>

                            <div className='text-4xl '>

                                Reception
                            </div>

                            <br />

                            <div className='text-3xl'>
                                on 4th August, 2024 at 5:00 PM
                            </div>

                            <div className='text-2xl'>
                                Majestic ceremonials Auditorium
                                Nattika, Triprayar
                            </div>
                            <div>
                                <a href="https://maps.app.goo.gl/dnS1DRV4sE8dyc977?g_st=ic">See it on the map</a>
                            </div>

                        </div>
                    </div>
            
                <div style={overlayStyle} className='grid grid-rows-5 auto-rows-auto'>
                    <div className={`text-2xl md:text-3xl w-full  transition-all ease-in-out duration-700 `}>
                        <div className={` ${(isScrolled) ? 'backdrop-filter backdrop-blur-md bg-opacity-10 text-black' : ''} ${infoClick ? ' text-black opacity-100 backdrop-blur-2xl' :null} transition-all duration-300 ease-in-out fixed flex flex-row justify-between w-full p-6`}>

                            <div onClick={clicked} className='cursor-pointer'>
                                {
                                    infoClick ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" >
                    
                        
                                    {/* <path key="pathA" d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path> */}
                                    <path key="pathB" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                 </svg>
                                    : 'Info'
                                }
                                
                              
                                
                                </div>

                            <div><a href="/gallery">Gallery</a></div>


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
                            Nattika<br />
                            Triprayar
                        </div>
                    </div>

                </div>
            </div>
            {/* <div>halo</div> */}
        </>
    )
}

export default MainDisplay