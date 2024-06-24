
import functionPic from "../assets/functionInfo.jpg"

function FunctionDeets() {

    return (
        <>
            <div className="w-full h-full flex justify-center">
                <div className="m-7 p-9 flex flex-col md:flex-row gap-12">

                    <div>
                        <img src={functionPic} alt="" srcset="" width="500px" />
                    </div>
                    <div className="flex flex-col gap-11 md:p-10 md:ml-36 md:pl-28 justify-center">
                        <div className="flex flex-col gap-5">
                            <div className="text-4xl md:text-5xl text-center">
                                Bear witness to <br />our special day
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 m-5 text-center">
                                    <div className="text-3xl">

                                        DATE:
                                    </div>

                                    <div className="text-2xl">

                                        4th August, 2024 at 5:00 PM
                                    </div>

                                </div>

                                <div className="flex flex-col gap-2 m-5 justify-center">

                                    <div className="text-3xl text-center">
                                        VENUE:

                                    </div>

                                    <div className="text-2xl text-center">

                                        Majestic ceremonials Auditorium <br />
                                        Nattika, Triprayar
                                    </div>

                                </div>

                                <div className="flex flex-col gap-2 m-5 text-center ">
                                    <div className="text-3xl">

                                        NIKAH:
                                    </div>

                                    <div className="text-2xl">
                                        3rd August 2024

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

export default FunctionDeets