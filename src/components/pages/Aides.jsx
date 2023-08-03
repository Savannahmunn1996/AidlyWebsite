
import React, { useEffect } from 'react'
import InfoCards from '../InfoCards'
import { useLocation } from 'react-router-dom';
import Foot from "../Foot"


const Aides = ({ theme, darkMode, setTheme }) => {

  // const [currentIt, setIt] = useState();


  // const handleChange = (aide) => {
  //   setIt(aide);

  // };

  
  const location = useLocation();


  useEffect(() => {
    // Set body class based on current route
    document.body.classList.add('aides-page');
    return () => {
      document.body.classList.remove('aides-page');
    };
  }, []);



  // This was originally where
  //text-${darkMode ? 'white' : 'white'} this was in there before

  return (
    <div className={`bg-${darkMode ? 'black' : 'black'}  min-h-screen  `} >
      <InfoCards theme={theme} setTheme={setTheme} />
      {/* <Foot isTheAides={isTheAides}></Foot> */}
    </div>
  )
}

export default Aides