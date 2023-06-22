import React, { useState } from 'react'
import { ImInstagram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { SlSocialReddit } from "react-icons/sl";

import axios from 'axios';




const Foot = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/subscribe', { email });
      console.log('Successfully subscribed!');
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Failed to subscribe:', error);
      // Handle error, e.g., show an error message
    }
  };


  return (
    <footer className="bg-footz relative w-full text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='ml-80'>
            <h3 className="text-lg font-semibold mb-4 font-robo">Join Our Early Adopter List</h3>
            <p className="text-xs font-robo mb-2 text-gray-300 mr-8">We'll send you updates when major releases come out and you'll get special perks!</p>
            <form className="flex flex-col mr-8" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="bg-transparent border border-gray-500 text-gray-100 py-2 px-3 mb-2 rounded-[15px] focus:outline-none  md:w-96"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-800 to-purple-700 hover:from-purple-800 hover:to-blue-600 text-white py-2 px-4 rounded-[15px]  md:w-96 focus:outline-none"
              >
                Join
              </button>
            </form>
          </div>
          <div></div>



          <div className='grid grid-col-1 mx-auto gap-8 md:block relative'>

            <div className=' grid grid-col-1 gap-2 ml-2'>
              <h3 className='text-lg'>Say Hi!</h3>
              <p className="text-md  text-gray-300 hover:text-white  font-robo">
                hello@aidly.ai
              </p>
            </div>


            <ul className='py-4 mr-96 flex flex-col lg:flex-row justify-between md:mt-12 mx-auto '>
              <a href="https://www.instagram.com/aidlyco/" target='_blank' rel="noopener noreferrer">
                <li className='flex items-center mx-1 md:mx-3 '>
                  <ImInstagram className='w-7 h-7 mr-1'></ImInstagram>
                  <p className='text-gray-200 hover:text-white '>Instagram</p>
                </li>
              </a>

              <a href="https://twitter.com/aidlyAI" target="_blank" rel="noopener noreferrer">
                <li className='flex items-center mx-1 md:mx-3 '>
                  <ImTwitter className='w-8 h-8 mr-1'></ImTwitter>
                  <p className='text-gray-200 hover:text-white '>Twitter</p>
                </li>
              </a>

              <a href='https://www.reddit.com/user/aidly-ai' target='_blank' rel='noopener noreferrer'>
                <li className='flex items-center mx-1 md:mx-3 '>
                  <SlSocialReddit className='w-8 h-8 mr-1 gray'></SlSocialReddit>
                  <p className='text-gray-300 hover:text-white '>Reddit</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};



export default Foot;

























