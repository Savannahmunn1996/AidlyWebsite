import React from 'react'
import { ImInstagram } from "react-icons/im";
import {ImTwitter } from "react-icons/im";


const Foot = () => {
    return (
        <footer className="bg-footz absolute w-screen text-white ">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <img className='ml-8 h-5 w-13' src="/iconText.png" alt="aidly icon" />
                        <div className=" text-xl mt-6 ml-8 font-robo ">Say Hi!</div>
                        <p className="text-md ml-8 mt-4 text-gray-300 hover:text-white hover:underline font-robo">
                            hello@aidly.ai
                        </p>
                    </div>

                    <div><ImInstagram  className='w-10 h-10 cursor-pointer mt-4 p-0 flex'></ImInstagram> 


                    <ImTwitter  className='w-12 h-12 cursor-pointer mt-10 p-0'></ImTwitter> </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-robo">Navigation</h3>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a
                                    href="#home"
                                    className="text-gray-300 hover:text-white hover:underline font-robo"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="mb-2">
                                <a
                                    href="#aides"
                                    className="text-gray-300 hover:text-white hover:underline font-robo"
                                >
                                    Aides
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-white hover:underline font-robo"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                   
{/* This can be Its own component once we get start applying functionality */}
                    <div className=''>
                        <h3 className="text-lg font-semibold mb-4 font-robo ">Join Our <span className='gradient-text'>Early Adopter List</span></h3>
                        <p className="text-xs font-robo mb-2 text-gray-300 mr-8" >We'll send you updates when major releases come out
                            and you'll get special perks!</p>
                        <form className="flex flex-col mr-8">
                            <input
                                type="email"
                                placeholder=" Your Email"
                                className="bg-transparent border border-gray-500 text-gray-100 py-2 px-3 mb-2 rounded-[15px] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className=" bg-gradient-to-r from-pink-800 to-purple-700 hover:from-purple-800 hover:to-blue-600 ... text-white py-2 px-4 rounded-[15px] focus:outline-none"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Foot