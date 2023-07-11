import React from 'react'
import ReactPlayer from 'react-player'
import device from '../assets/DeviceOutline.png'
import vid from '../assets/screen.MP4';

const Tech = ({ videoUrl }) => {
    // let vidToUse = null;
    // if (videoUrl === 'first') {
    //     vidToUse = vid;
    // } else if (videoUrl === 'secondVid.MP4') {

    // }


    return (
        <div className=" flex flex-col fixed inset-y-0 right-0 mx-auto  gap-8  lg:mt-16 lg:mb-10 md:gap-32 lg:pr-48 md: items-center">
            <div className=" ">
                <div className="relative mt-8 md:mt-16 w-[300px]  lg:w-[365px]  md:w-full mx-auto">
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


        </div>

    )
}

export default Tech