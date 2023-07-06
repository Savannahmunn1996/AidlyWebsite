import React from 'react'
import ReactPlayer from 'react-player'


const InfoCards = () => {
  return (<>
    {/* <div className=" grid grid-cols-2 gap-4 place-content-evenly  ">
    <div className =" bg-lime-300 w-80 h-80 md:w-96 md:h-96  border-yellow-200 justify-center items-center ">
<h1 className='text-orange-400 text-4xl ml-16 mt-12'>Atlan</h1>
<h1 className='text-orange-400 text-5xl m'>Your Travel Guide In Your Pocket</h1>
    </div>
    </div> */}
    <card className='grid grid-cols-1   mx-auto  gap-2   items-center'>
    <h1 className='text-orange-400 text-4xl ml-12 md:ml-40'>Atlan</h1>
    <h1 className='text-orange-400 text-6xl mt-16 md:mt-40 ml-12 md:ml-40'>Your Travel Guide In Your Pocket</h1>
    <h1 className='text-orange-300 text-5xl mt-8 md:mt-12 ml-12 md:ml-40'>Destinations, Itineraries, Flights, Hotels</h1>
    </card>
    <div className=" grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto max-w-3xl gap-8  md:gap-32   items-center">
                <div className=" ">
                    <div className="relative mt-8 md:mt-16 w-[325px]  lg:w-[370px]  md:w-full mx-auto">
                        <img
                            className="object-fill rounded-xl"
                            src="/DeviceOutline.png"
                            alt="A fake phone to hold the video"
                        />
                        <div className="absolute top-4 bottom-2  left-2 right-2 h-full md:top-4 rounded-[2.25rem] rounded-t-none overflow-hidden">
                            <ReactPlayer
                                url="/screen.MP4"
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

                
            </div>


    </>
  )
}

export default InfoCards