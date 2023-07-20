import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import Tech from "./Tech"
import Card from "./Card"
import data from "../data.json"
import Blob from "./Blob"
import TechToggle  from './TechToggle';
import Ipad from "./Ipad"
import CallToAction from './CallToAction';


const InfoCards = ({ setTheme, theme }) => {


  const [videoUrl, setVideoUrl] = useState('/screen.MP4');

  const handleInView = (inView, entry) => {
    // console.log('Inview:', inView)
    // console.log("entry:", entry)
  }

  console.log(theme)



  return (<>
    {/* <div className=" grid grid-cols-2 gap-4 place-content-evenly  ">
    <div className =" bg-lime-300 w-80 h-80 md:w-96 md:h-96  border-yellow-200 justify-center items-center ">
<h1 className='text-orange-400 text-4xl ml-16 mt-12'>Atlan</h1>
<h1 className='text-orange-400 text-5xl m'>Your Travel Guide In Your Pocket</h1>
    </div>
    </div> */}
    {/* <InView as="div" onChange={handleInView}> */}

 
    <Blob theme={theme}/>
 
   

    {data.map((item, idx) => {
      return (
     
        <React.Fragment key={idx} >
 
          <Card
            setVideoUrl={setVideoUrl}
            setTheme={setTheme}
            name={item.name}
            header={item.header}
            description={item.description}
            textcolor={item.textcolor}
            textcolortwo={item.textcolortwo}
            cardVideoUrl={item.cardVideoUrl}
          />

        </React.Fragment>
      )
    })}
    
   
    {/* </InView> */}
   
      <Tech videoUrl={videoUrl} theme={theme}/>
   <CallToAction></CallToAction>
  </>
  )
}

export default InfoCards