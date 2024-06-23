import { useEffect, useState } from "react";



function CountDown() {


    function timer() {
        var targetDate = new Date('2024-06-25T00:00:00Z');

        const timeDifference = targetDate.getHours() * 60 * 60 * 1000 + targetDate.getMinutes() * 60 * 1000;
        targetDate = new Date(targetDate.getTime() - timeDifference);

        targetDate = targetDate.getTime()

        const day = new Date().getTime()
        const difference = targetDate - day
        // console.log("D :",Math.round(difference/ (1000 * 60 * 60 * 24)))
        // console.log("H : ",Math.round(difference / (1000 * 60 * 60)) % 24)
        // console.log("M : ",Math.floor((difference / 1000 / 60) % 60))
        // console.log("S :",Math.floor((difference / 1000) % 60))

        var deets = {
            day: Math.round(difference / (1000 * 60 * 60 * 24)),
            hour: Math.round(difference / (1000 * 60 * 60)) % 24,
            minute: Math.floor((difference / 1000 / 60) % 60),
            second: Math.floor((difference / 1000) % 60)
        }
        return deets

    }

    const [dateDeets, setDateDeets] = useState(timer())

    useEffect(() => {

        setInterval(() => {

            setDateDeets(timer())
        }, 1000)

    }, [])

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-3xl md:text-4xl bg-orange-50 p-7 pt-9 pb-9">

                <div className="flex flex-col">
                    <div className="flex justify-center">
                        {dateDeets.day}
                    </div>
                    <div>
                        Days
                    </div>
                </div>

                <div>
                    <div className="flex justify-center">
                        {dateDeets.hour}
                    </div>
                    <div>
                        Hours
                    </div>
                </div>

                <div>
                    <div className="flex justify-center">
                        {dateDeets.minute}

                    </div>
                    <div>
                        Minutes
                    </div>
                </div>

                <div>
                    <div className="flex justify-center">
                        {dateDeets.second}
                    </div>
                    <div>
                        Seconds
                    </div>
                </div>

            </div>
        </>
    )
}

export default CountDown