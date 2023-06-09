// import React, {useEffect} from 'react'

import ReactPlayer from 'react-player'
import device from "../../assets/DeviceOutline.png"
import vid from "../../assets/screen.MP4"

const Home = () => {

    return (
        <>
            <div className="text-center p-8  ">
                <h1 className='text-5xl md:text-7xl lg:text-8xl py-2 mt-15  font-bold text-purple-950' >Get Your Own AI Team</h1>
                <h3 className='text-2xl mt-3 py-2 font-S text-purple-950 font-light' >Unlock the Power of Al with Specialized Experts</h3>
                <a href="https://apps.apple.com/us/app/aidly-ai-chat/id6446067509" target="_blank" rel="noopener noreferrer" >
                    <button
                        type="submit"
                        className=" animate-bounce w-3/4 h-14 mt-10  shadow-xl bg-gradient-to-r from-pink-800 to-purple-700 hover:from-purple-800 hover:to-blue-600 ... text-white  font-apple text-xl py-2 px-4 rounded-[16px] focus:outline-none max-w-sm "
                    >
                        Download for Free
                    </button>
                </a>
            </div>

            {/* This is the perfected, responsive layout */}

            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto max-w-3xl gap-8 md:max-w-full  md:gap-28 lg:gap-40 items-center">
                <div className="px-3 md:ml-20">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-6 text-purple-950">Speak to Your Aides</h2>
                    <p className="md:text-lg lg:text-xl text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et aliquam magna. Integer et sagittis dui, venenatis mollis turpis. Vestibulum id nibh non sapien scelerisque pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et malesuada turpis. Nam a tellus quis nisl cursus facilisis.</p>
                </div>
                {/* phone */}
                <div >
                    <div className="relative mt-8  md:mt-16 w-[325px] lg:w-[370px] md:w-full mx-auto">
                        <img
                            className="object-fill rounded-xl "
                            src={device}
                            alt="A fake phone to hold the video"
                        />
                        <div className="absolute top-4 bottom-2  left-2 right-2 h-full md:top-4 rounded-[2.25rem] rounded-t-none overflow-hidden">
                            <ReactPlayer
                                url={vid}
                                volume={0}
                                playing={true}
                                loop={true}
                                muted={true}
                                width="94%"
                                height="95%"
                                className="youtube-vid-container  object-cover  mx-auto rounded-[2.25rem] rounded-t-none"
                            />
                        </div>
                    </div>
                </div>
            </div>






            <div className=" grid grid-cols-1 md:grid-cols-2 w-10/12  mx-auto max-w-3xl md:max-w-full   gap-8  md:gap-32 lg:gap-56  items-center">
                <div className=" md:mb-20  ">
                    <div className="relative mt-8 md:mt-16 w-[325px]  lg:w-[370px]  md:w-full mx-auto">
                        <img
                            className="object-fill rounded-xl"
                            src={device}
                            alt="A fake phone to hold the video"
                        />
                        <div className="absolute top-4 bottom-2  left-2 right-2 h-full md:top-4 rounded-[2.25rem] rounded-t-none overflow-hidden">
                            <ReactPlayer
                                url={vid}
                                volume={0}
                                muted={true}
                                playing={true}
                                loop={true}
                                width="94%"
                                height="95%"
                                className="youtube-vid-container iframe object-cover  mx-auto rounded-[2.25rem] rounded-t-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-3  mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-6 text-purple-950">Aidly on Command</h2>
                    <p className=" md:text-lg lg:text-xl text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et aliquam magna. Integer et sagittis dui, venenatis mollis turpis. Vestibulum id nibh non sapien scelerisque pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et malesuada turpis. Nam a tellus quis nisl cursus facilisis.</p>
                </div>
            </div>




        </>
    )
}

export default Home



