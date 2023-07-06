import React from 'react'
import ReactPlayer from 'react-player'

const Tech = () => {
  return (
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

  )
}

export default Tech