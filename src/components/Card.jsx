import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import TyraAvatar from "../assets/TyraAvatar.png"
import EmmaAvatar from "../assets/EmmaAvatar.png"
import IanAvatar from "../assets/IanAvatar.png"
import JessAvatar from "../assets/JessAvatar.png"
import LexAvatar from "../assets/LexAvatar.png"
import LinusAvatar from "../assets/LinusAvatar.png"
import AtlanAvatar from "../assets/AtlanAvatar.png"
import AndreAvatar from "../assets/AndreAvatar.png"

const Card = ({ name, header, description, textcolor, textcolortwo, setTheme, setVideoUrl, cardVideoUrl }) => {

    const { ref, inView, entry } = useInView({
        threshold: .5
    })



    useEffect(() => {
        if (inView) {
            setTheme(textcolor);
            // console.log("card video url:" + cardVideoUrl)
            setVideoUrl(cardVideoUrl)
        }
    }, [inView])

    // console.log('in view?', inView, textcolor);

    return (
        <div className={`flex w-3/6 flex-col pt-2 mr-32 gap-2  test ${textcolor}`} ref={ref}>
            {/* this is where each icon should render conditionally */}
           
            {textcolor === "red" && <img className="w-32 h-32 ml-32" src={TyraAvatar}></img>}
            {textcolor === "orange" && <img className=" w-32 h-32 ml-32" src={AtlanAvatar}></img>}
            {textcolor === "pink" && <img className=" w-32 h-32 ml-32" src={JessAvatar}></img>}
            {textcolor === "blue" && <img className=" w-32 h-32 ml-32" src={EmmaAvatar}></img>}
            {textcolor === "purple" && <img className=" w-32 h-32 ml-32" src={LinusAvatar}></img>}
            {textcolor === "green" && <img className=" w-32 h-32 ml-32" src={AndreAvatar}></img>}
            {textcolor === "ian" && <img className=" w-32 h-32 ml-32" src={IanAvatar}></img>}
            {textcolor === "lex" && <img className=" w-32 h-32 ml-32" src={LexAvatar}></img>}
            

            <h1 className={` text-4xl lg:text-5xl px-24 ml-36  `}>{name}</h1>
            <h1 className={`break-all text-4xl md:ml-36 mt-16 md:mt-32 `}>{header}</h1>
            <h2 className={`text-3xl mt-8 md:mt-12 ml-36`}>{description}</h2>
        </div>
    )
}

export default Card