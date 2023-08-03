import React from 'react'
import back from "../assets/CTABackground.png"
import cta from "../assets/AppStoreCTA.png"

const CallToAction = () => {
  return (
    <div className="justify-center relative items-center mx-auto">
       
<img className='z-10' src={back} ></img>
<div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
    <h2 className=" text-5xl text-purple-500 mb-4 z-20">Get Aidly now.</h2>
    <p className=" mb-6 text-purple-500 z-20">Aidly plus 7-day free trial included</p>
    <img className= "z-20 w-60 lg:w-80 hover:skew-x-12 hover:skew-y-12   transition duration-500 ease-in-out" src={cta}></img>
</div>
    </div>
  )
}

export default CallToAction