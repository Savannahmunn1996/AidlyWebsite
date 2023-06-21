import React, { useState } from 'react'
import axios from 'axios';
import Modal from "./Modal"


const ContactForm = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [heyModal, setModal] = useState(false);


  function sendMail() {
   
    if (email && message) {
      // This is a request to the server
      axios.post("http://localhost:3000/send-email", {
        message,
        email
      })
        .then(() => setModal(true))
        .catch(() => alert("nope, try again..."))
      return;
    }
    else {
      return alert("Please fill in all fields to continue")
    }
  }

  return (
    <>
      <form >
        <div className="items-center grid grid-cols-1">
          <label htmlFor="message" className="text-4xl text-gray-700 font-semibold ml-8 mb-10">
            Dear Aidly team,
          </label >
          <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className=" focus:outline-gray-300 h-40 bg-gray-200" placeholder='Enter Message'></input>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='mb-10 h-28 focus:outline-gray-300 bg-gray-200' placeholder='Enter Email'></input>
          <button onClick={() => sendMail()} className='text-Dpurp rounded-[18px] outline-2 md:outline-4 outline outline-Dpurp w-40 h-10 ml-8 mb-14 hover:bg-gray-200'>Send Message</button>
        </div>
      </form>
      {/* <Modal isVisible={heyModal} close={() => setModal(false)} /> */}

    </>
  )
}

export default ContactForm