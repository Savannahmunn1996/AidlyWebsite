import React from 'react'
import { ImInstagram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";







const Foot = () => {
    return (
      <footer className="bg-footz relative w-full text-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className='ml-10'>
              <h3 className="text-lg font-semibold mb-4 font-robo">Join Our Early Adopter List</h3>
              <p className="text-xs font-robo mb-2 text-gray-300 mr-8">We'll send you updates when major releases come out and you'll get special perks!</p>
              <form className="flex flex-col mr-8">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-gray-500 text-gray-100 py-2 px-3 mb-2 rounded-[15px] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-800 to-purple-700 hover:from-purple-800 hover:to-blue-600 text-white py-2 px-4 rounded-[15px] focus:outline-none"
                >
                  Join
                </button>
              </form>
            </div>
  
            <div className='md:col-span-2 flex flex-col justify-end'>
             
             
            </div>
  
            <div className='flex flex-col justify-end ml-56'>

            <div className='md:col-span-2 flex flex-col justify-end'>
             <h3 className='text-lg'>Say Hi!</h3>
             <p className="text-md  mb-8 text-gray-300 hover:text-white hover:underline font-robo">
               hello@aidly.ai
             </p>
           </div>
              <div className='flex items-center mb-2'>
                <ImInstagram className='w-7 h-7 mr-1'></ImInstagram>
                <p>Instagram</p>
              </div>
              <div className='flex items-center'>
                <ImTwitter className='w-8 h-8 mr-1'></ImTwitter>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };



  export default Foot;
  



  


  
  
  
  
  
  
  
 










