import storyPic from "../assets/story.jpg"

function Story(){

    return(
        <>
            <div className="w-full h-full">
                <div className="flex flex-row p-6 m-7 md:m-16">
                    <div className=" md:flex">
                        <div>
                            <img src={storyPic} width="500px"/>
                        </div>
                        <div className="p-8 flex flex-col mt-9 md:mt-0 md:ml-14 justify-center">
                            <div className="md:text-7xl text-4xl">
                                GIRL MEETS BOY.
                                <br />
                                BOY FALLS FOR GIRL.
                            </div>

                            <div className="mt-6 text-wrap md:text-xl text-lg md:w-2/3">
                            It was a tale straight out of a novel. We went from childhood
                            friends and high school sweethearts to estranged friends and
                            rekindled first loves.
                            <br /><br />
                            Now, we're preparing to enter a new chapter of our love
                            story.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story