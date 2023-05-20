

import React, { useState } from 'react'
import Container from './Container'

function Navbar({ currentPage, handlePageChange }) {
  const [shadow, setShadow] = useState("")

  function handleScroll() {
    if (window.scrollY >= 150) {
      setShadow(true)
    }
    else {
      setShadow("")
    }
  }

  


window.addEventListener("scroll", setShadow)




  return (
    <nav className={ shadow ?  "nav shad" :  "nav" }  >
      <ul className="py-4 mb-12 flex justify-between">

        <img className='ml-8 h-10 w-15' src="/iconText.png" alt="aidly icon" />
        <div className='flex justify-between items-center mx-60 space-x-20 '>
          <li className="font-robo ml-80 mx-3 text-xl text-Dpurp">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className="font-robo mx-3 text-xl text-Dpurp">
            <a
              href="#aides"
              onClick={() => handlePageChange('Aides')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Aides' ? 'nav-link active' : 'nav-link'}
            >
              Aides
            </a>
          </li>

          <li className=" font-robo mx-3  text-xl text-Dpurp">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact Us
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar