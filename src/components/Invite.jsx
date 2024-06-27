import inviteImg from "../assets/invite_img.jpeg"


function Invite() {


    return (
        <>
            <div className="bg-orange-50 pt-11">
                <div className="flex justify-around pb-9">

                    <div className="flex flex-col md:flex-row">
                        <div className="text-5xl p-14">
                            Your presence at our
                            wedding is the only
                            present we require.
                        </div>
                        <div className="text-2xl p-14">
                            “Don’t forget to mark your calendars
                            and join us as we celebrate love and
                            unity on our wedding day!”
                        </div>
                        
                    </div>
                </div>
                <div className="w-full h-64 md:h-96">
                    <img className="w-full h-full object-cover" src={inviteImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Invite