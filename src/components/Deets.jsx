import deetImg from "../assets/info.jpg"

function Deets() {

    return (
        <> 
            <div className="w-full h-full flex justify-center">
                <div className="m-7 p-9 md:flex">
                    <div className="flex flex-col gap-11 md:justify-center md:p-10 pb-14">
                        <div className="flex flex-col gap-5">
                            <div className="text-4xl md:text-5xl">
                                GROOM
                            </div>
                            <div className=" text-xl md:text-2xl md:w-2/3">
                                Haroon Kabeer <br />
                                S/o Kabeer & Sajitha Kabeer
                                Kannankillath House , Edamuttam
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="text-4xl md:text-5xl">
                                BRIDE
                            </div>

                            <div className="text-xl md:text-2xl md:w-2/3">
                                Fathima Nazrin <br />
                                D/o Nizar K.M & Sameena K.P
                                Manzil House , palappuram
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={deetImg} alt="" srcset=""  width="400px"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deets