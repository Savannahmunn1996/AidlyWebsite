
import React from 'react'
import InfoCards from '../InfoCards'
import { useLocation } from 'react-router-dom';
import Foot from "../Foot"

const Aides = ({theme, darkMode, setTheme}) => {

  // const [currentIt, setIt] = useState();


  // const handleChange = (aide) => {
  //   setIt(aide);
    
  // };

  //I am thinking about using this if statement to render each aides component and I
  //am thinking of how I can do it based on scroll.

  // const Render = () => {
  //   if (currentIt === 'Home') {
  
  //   }
  //   if (currentIt === 'Aides') {
     
  //   }
  //   if (currentIt === 'Contact') {
    
  //   }
  //   if (currentIt === 'Contact') {
    
  //   }
  //   if (currentIt === 'Contact') {
    
  //   }
  //   if (currentIt === 'Contact') {
    
  //   }
  //   if (currentIt === 'Contact') {
    
  //   }

  //   return <Atlan/>;
  // };


  



// This was originally where
//text-${darkMode ? 'white' : 'white'} this was in there before

  return (
    <div className={`bg-${darkMode ? 'black' : 'black'}  min-h-screen  `} >
      <InfoCards theme={theme} setTheme={setTheme}/>
      {/* <Foot isTheAides={isTheAides}></Foot> */}
      </div>
  )
}

export default Aides