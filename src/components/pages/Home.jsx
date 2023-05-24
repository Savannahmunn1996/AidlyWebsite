import React from 'react'

import ReactPlayer from 'react-player/youtube'

const Home = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className='text-7xl py-2 font-robo mt-15 font-bold text-purple-950' >Get Your Own AI Team</h1>
                <h3 className='text-2xl mt-3 py-2 font-robo text-purple-950 font-light' >Unlock the Power of Al with Specialized Experts</h3>
                <a href="https://apps.apple.com/us/app/aidly-ai-chat/id6446067509" target="_blank" rel="noopener noreferrer" >
                    <button
                        type="submit"
                        className=" animate-bounce  w-3/4 h-14 mt-10  shadow-xl bg-gradient-to-r from-pink-800 to-purple-700 hover:from-purple-800 hover:to-blue-600 ... text-white  font-robo text-xl py-2 px-4 rounded-[16px] focus:outline-none max-w-sm "
                    >
                        Download for Free
                    </button>
                </a>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto max-w-3xl gap-8  md:gap-32 items-center">
                <div className="   px-3">
                    <h2 className="text-4xl font-bold font-robo mb-6 text-purple-950">Speak to Your Aides</h2>
                    <p className="font-robo text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et aliquam magna. Integer et sagittis dui, venenatis mollis turpis. Vestibulum id nibh non sapien scelerisque pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et malesuada turpis. Nam a tellus quis nisl cursus facilisis.</p>
                </div>
                {/* phone */}
                <div className="   ">
                    <div className="relative mt-8 md:mt-16 w-[350px]  md:w-full mx-auto">
                        <img
                            className="object-fill rounded-xl"
                            src="/DeviceOutline.png"
                            alt="A fake phone to hold the video"
                        />
                        <div className="absolute top-[70px] bottom-2 left-2 right-2 h-full md:top-[65px] rounded-[2.25rem] rounded-t-none overflow-hidden">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=EpLX09EwhcY"
                                volume={0}
                                muted={true}
                                width="93%"
                                height="87%"
                                className="youtube-vid-container object-cover  mx-auto rounded-[2.25rem] rounded-t-none"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className=" items-center">
                <div className="w-80 mb-40 mt-40 h-90 float-left items-center ml-96">
                    <div className="relative mt-8 md:mt-16">
                        <img
                            className="object-fill rounded overflow-hidden"
                            src="/DeviceOutline.png"
                            alt="A fake phone to hold the video"
                        />
                        <div className="absolute top-14 ml-7 h-full rounded-xl">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=EpLX09EwhcY"
                                volume={0}
                                muted={true}
                                width="95%"
                                height="85%"
                                className="object-fill rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-96 ml-96 px-2 mr-auto">
                    <h2 className="text-4xl font-bold font-robo mb-6 text-purple-950">Aidly on Command</h2>
                    <p className="font-robo text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et aliquam magna. Integer et sagittis dui, venenatis mollis turpis. Vestibulum id nibh non sapien scelerisque pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et malesuada turpis. Nam a tellus quis nisl cursus facilisis.</p>
                </div>
            </div>




        </>
    )
}

export default Home



