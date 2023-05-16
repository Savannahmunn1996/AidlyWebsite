import React, { useState } from 'react'
import Navbar from './Navbar';
import Aides from './pages/Aides';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Foot from './Foot'

const Container = () => {
  {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Aides') {
        return <Aides />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <>
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <div>
<Foot></Foot>
      </div>
      </>
    );
  }
}

export default Container