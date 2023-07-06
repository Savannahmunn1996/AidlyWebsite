import React, { useState,useEffect } from 'react'
import Navbar from './Navbar';
import Aides from './pages/Aides';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Foot from './Foot'

import Sticky from 'react-stickynode';




const Container = () => {
  {

    const [isAidesPage, setIsAidesPage] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');



    const handlePageChange = (page) => {
      setCurrentPage(page);
      setIsAidesPage(page === 'Aides');
    };
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      
    };

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Aides') {
        return <Aides darkMode={darkMode} />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Contact />;
    };

    

    return (

      <div className="flex flex-col min-h-screen ">
        <Sticky enabled={true} top={0} innerZ={2}>
          <header>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}
            isAidesPage={isAidesPage}
            toggleDarkMode={toggleDarkMode} />
          </header>
        </Sticky>

        <main className="flex-grow">
          {renderPage()}
        </main>
        <footer>
          <Foot></Foot>
        </footer>
      </div>



    );
  }
}

export default Container