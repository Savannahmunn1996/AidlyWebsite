

import React, { useState, useEffect } from 'react'
import Container from './Container'







function Navbar({ currentPage, handlePageChange }) {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    let timeoutId;

    function handleScroll() {
      clearTimeout(timeoutId);
      setShadow(true);

      timeoutId = setTimeout(() => {
        setShadow(false);
      }, 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <nav className={` md:block  ${shadow ? "nav shad" : "nav"} `}  >
      {/* I added a mr-96 */}
      <ul className="py-4  md:px-4 mb-12 flex justify-center ">
{/* I added a ml-96, these changes ruined responsiveness */}
        <img className='mr-6 md:mr-96 h-12 w-32 md:w-40' src="/iconText.png" alt="aidly icon" />
        <div className=' justify-between items-center flex '>
          <li className="font-robo mx-1 md:mx-3 text-lg md:text-2xl text-Dpurp">
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
          <li className="font-robo mx-1 md:mx-3 text-lg md:text-2xl text-Dpurp">
            <a
              href="#aides"
              onClick={() => handlePageChange('Aides')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Aides' ? 'nav-link active' : 'nav-link'}
            >
              Aides
            </a>
          </li>

          <li className=" font-robo mx-1 md:mx-4  text-lg md:text-2xl text-Dpurp ">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class  Otherwise, we set it to a normal nav-link
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