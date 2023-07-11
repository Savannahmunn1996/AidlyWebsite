import React from 'react'
import bubble from "../assets/bubbleIcon.png"


const Thankyou = ({  close }) => {

 





    return (
        <div className=' flex justify-center items-center  '>
        <div className=" w-[200px] md:w-[400px] flex flex-col justify-center items-center ">

            <button className="text-white text-2xl place-self-end" onClick={() => close()}>X</button>
            <div className=' p-2  h-60 w-60 md:w-96  '>
                <img className='mt-2 ml-4 h-20 w-20' src={bubble} alt="aidly icon" />
                <h1 className='text-2xl mt-3 ml-4 font-medium text-gray-800'>Thanks for reaching out!</h1>
                <p className='text-gray-800 mt-2 ml-4'>We got your message. We'll be in touch soon.</p></div>



        </div>
        </div>
    )
}

export default Thankyou