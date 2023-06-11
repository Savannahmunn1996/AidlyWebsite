import React from 'react'

const ContactForm = () => {
  return (
    <>
      <form>
        <div className="items-center grid grid-cols-1">
          <label className= "text-4xl font-semibold">
            Dear Aidly team,
          </label>
          <input type="text" ></input>
          <button className='text-Dpurp rounded-[18px] outline-2 md:outline-4 outline outline-Dpurp w-40 h-10 '>Send Message</button>
        </div>
      </form>


    </>
  )
}

export default ContactForm