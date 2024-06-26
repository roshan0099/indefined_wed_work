function Footer({content}) {

    return (

        <>
            <div className="w-full h-full flex p-20 pb-10 md:p-28">
                <div className="flex flex-col md:flex-row w-full gap-14">

                    <div className="text-6xl flex-1">
                        {content ==='' ? "'We hope to see you there'" : "'We look forward to your presence.'"}
                        
                        
                    </div>

                    <div className="flex-1 flex justify-center items-center text-2xl p-3">
                        <div >
                        Defined with love ; <br />
                        indefined<span className="text-green-700">&gt;</span> 

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Footer