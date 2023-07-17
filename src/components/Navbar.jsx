

import React, { useState, useEffect } from 'react'
import Container from './Container'
import Aides from './pages/Aides';
import { Link, useLocation } from 'react-router-dom'
import iconText from '../assets/iconText.png'
import DownloadButton from './DownloadButton';





function Navbar({ darkMode, setDarkMode, theme }) {
  const [shadow, setShadow] = useState(false);



  const location = useLocation();
  const isAidesPage = location.pathname === '/aides' ? true : false;








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

  useEffect(() => {
    if (location.pathname === '/aides') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [location])




  return (
    <nav className={`md:block ${shadow ? 'nav shad' : 'nav'} ${isAidesPage ? 'dark' : ''} ${isAidesPage ? theme : ''}`} style={{ background: darkMode === true ? '#010100' : '' }} >
      {/* I added a mr-96 */}
      <ul className="py-4 md:px-4 mb- flex justify-between ">

        <img className='ml-4 md:ml-40 h-10 w-20 md:w-32' src={iconText} alt="aidly icon" />
        <div className=' justify-between items-center flex mr-10'>
          <li className="font-robo mx-1 md:mx-3 text-lg  ">
            <Link
              to="/"
              className="nav-link"


            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            // className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

            >
              Home
            </Link>
          </li>
          <li className="font-robo mx-1 md:mx-3 text-lg ">
            <Link
              className="nav-link"
              to="/aides"

            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={currentPage === 'Aides' ? 'nav-link active' : 'nav-link'}

            >
              Aides
            </Link>

          </li>

          <li className=" font-robo mx-1 md:mx-4 mr-4 text-lg  md:mr-20  ">
            <Link
              className="nav-link"
              to="/contact"

            // Check to see if the currentPage is `Contact`, and if so we use the active link class  Otherwise, we set it to a normal nav-link
            // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}

            >
              Contact Us
            </Link>
          </li>
          
          <DownloadButton ></DownloadButton>
        
         
        </div>
       
      </ul>
    </nav>
  )
}

export default Navbar