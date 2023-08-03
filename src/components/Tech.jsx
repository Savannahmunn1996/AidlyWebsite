import React from 'react'
import ReactPlayer from 'react-player'
import device from '../assets/DeviceOutline.png'
import vid from '../assets/screen.MP4';
import tyra from "../assets/tyravid.MP4";
import lex from "../assets/lexvid.MP4"
import data from "../data.json"


const Tech = ({ videoUrl, theme }) => {
    // let VideoUrl = null;
    // if (VideoUrl === 'first') {
    //     cardVideoUrl = vid;}

    // } else if (videoUrl === '') {

    // console.log(videoUrl)
    if (videoUrl === '/screen.MP4') {
        videoUrl = vid
    }
    else if (videoUrl === "/tyravid.MP4") {
        videoUrl = tyra
    }
    else if (videoUrl === "/lexvid.MP4") {
        videoUrl = lex
    }

    // window.onscroll = function (e) {
    //     console.log(window.scrollY); // Value of scroll Y in px
    // };

    let divClassName = "w-full md:w-auto flex flex-col justify-center items-center fixed inset-y-0 h-1/2 right-0 mx-auto pt-72  lg:mt-12  md:gap-32 lg:pr-48 md:items-center z-20"
    let outerName = "sm:nav w-full"
    // if (theme === 'green') {
    //     outerName = ""
    //     divClassName = " flex flex-col justify-center items-center relative inset-y-0 h-1/2 right-0 -mt-128 -pt-72 lg:pr-48 md:items-center z-20"
    //     // -mt-128 -pt-72
    // }


    return (
        <div className={outerName}>
            <div className={divClassName}>
                    <div className="mt-8 md:mt-16 w-[250px]  lg:w-[320px] mx-auto">
                        <div className="relative">
                            <img
                                className="object-fill rounded-xl"
                                src={device}
                                alt="A fake phone to hold the video"
                            />
                            <div className="absolute top-4 bottom-2  left-2 right-2 h-full md:top-4 rounded-[2.25rem] rounded-t-none overflow-hidden">
                                <ReactPlayer
                                    url={videoUrl}
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
                {/* toggle buttons */}
                {/* <div className=" flex md:mr-80 top-96 pt-20 absolute inset-y-0 right-0  mt-80  ">
                <button className='text-white mr-3'> Iphone</button> <button className='text-white ml-3'> Ipad</button>

            </div> */}

            </div>
        </div>

    )
}

export default Tech