import storyPic from "../assets/story.jpg"

function Story() {

    return (
        <>
            <div className="w-full h-full">
                <div className="flex flex-row p-6 m-7 md:m-16">
                    <div className=" md:flex">
                        <div>
                            <img src={storyPic} width="500px" />
                        </div>
                        <div className="p-8 flex flex-col mt-9 md:mt-0 md:ml-14 justify-center">
                            <div className="md:text-7xl text-4xl">
                                In each other,
                                <br />
                                we have found our forever.
                            </div>

                            <div className="mt-6 text-wrap md:text-xl text-lg md:w-2/3">
                                Our story began amidst the hustle of college life.
                                They say college is about late-night studies and exams,
                                but for us, it was about finding our forever teammate.
                                <br /><br />
                                Now, we're embarking on a new chapter of our love story...
                                From college sweethearts to forever partners.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story