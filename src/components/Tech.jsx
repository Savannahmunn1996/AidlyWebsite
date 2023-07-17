import React from 'react'
import ReactPlayer from 'react-player'
import device from '../assets/DeviceOutline.png'
import vid from '../assets/screen.MP4';
import data from "../data.json"


const Tech = ({ videoUrl }) => {
    // let VideoUrl = null;
    // if (VideoUrl === 'first') {
    //     cardVideoUrl = vid;}

    // } else if (videoUrl === '') {




    return (
      
        <div className=" flex justify-center items-center fixed inset-y-0 right-0 mx-auto   lg:mt-16 lg:mb-10 md:gap-32 lg:pr-48 md:items-center z-20">
            <div className=" ">
                <div className="relative mt-8 md:mt-16 w-[250px]  lg:w-[325px]  mx-auto">
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