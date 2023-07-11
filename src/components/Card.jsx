import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Card = ({ name, header, description, textcolor, textcolortwo, setTheme, setVideoUrl, cardVideoUrl }) => {

    const { ref, inView, entry } = useInView({
        threshold: .5
    })



    useEffect(() => {
        if (inView) {
            setTheme(textcolor);
            setVideoUrl(cardVideoUrl)
        }
    }, [inView])

    console.log('in view?', inView, textcolor);

    return (
        <div className={`flex w-3/6 flex-col pt-2 mr-32 gap-2  test ${textcolor}`} ref={ref}>
            <h1 className={`mt-20 text-4xl lg:text-5xl px-24 ml-10 pt-10 `}>{name}</h1>
            <h1 className={`break-all text-5xl md:ml-36 mt-16 md:mt-32 `}>{header}</h1>
            <h2 className={`text-4xl mt-8 md:mt-12 ml-12`}>{description}</h2>
        </div>
    )
}

export default Card