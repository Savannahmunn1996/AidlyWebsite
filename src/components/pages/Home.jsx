import React from 'react'

const Home = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className='text-7xl py-2 font-robo mt-15 font-bold text-purple-950' >Get Your Own AI Team</h1>
                <h3 className='text-2xl mt-3 py-2 font-robo text-purple-950 font-light' >Unlock the Power of Al with Specialized Experts</h3>
                <a href="https://apps.apple.com/us/app/aidly-ai-chat/id6446067509" target="_blank" rel="noopener noreferrer" >
                    <button
                        type="submit"
                        className=" animate-bounce  w-60 h-14 mt-10 shadow-xl bg-gradient-to-r from-pink-800 to-purple-700 hover:from-purple-800 hover:to-blue-600 ... text-white py-2 px-4 rounded-[16px] focus:outline-none"
                    >
                        Download for Free
                    </button>
                </a>
            </div>

            <div className=' w-48 h-85 float-right mr-96 bg-slate-400'>
                <img className=' object-fill' src="/DeviceOutline.png" alt="A fake phone to hold the video" />

            </div>
        </>
    )
}

export default Home