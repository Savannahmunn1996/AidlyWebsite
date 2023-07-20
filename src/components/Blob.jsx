import React, { useState } from 'react'
import blob from "../assets/b.svg"
import BlobAtlan from "../assets/BlobAtlan.png"
import BlobAndre from "../assets/BlobAndre.png"
import BlobEmma from "../assets/BlobEmma.png"
import BlobIan from "../assets/BlobIan.png"
import BlobJess from "../assets/BlobJess.png"
import BlobLex from "../assets/BlobLex.png"
import BlobTyra from "../assets/BlobTyra.png"
import BlobLinus from "../assets/BlobLinus.png"



const Blob = ({theme}) => {

  console.log(theme)


  return (
    <div className='md:mr-40 sticky top-72 flex justify-end'>

      {theme === 'orange' && <img className="h-96 z-10" src={BlobAtlan} alt="blob" />}
      {theme === 'pink' && <img className="h-96 z-10" src={BlobJess} alt="blob" />}
      {theme === 'blue' && <img className="h-96 z-10" src={BlobEmma} alt="blob" />}
      {theme === 'purple' && <img className="h-96 z-10" src={BlobLinus} alt="blob" />}
      {theme === 'red' && <img className="h-96 z-10" src={BlobTyra} alt="blob" />}
      {theme === 'ian' && <img className="h-96 z-10" src={BlobIan} alt="blob" />}
      {theme === 'lex' && <img className="h-96 z-10" src={BlobLex} alt="blob" />}
      {theme === 'green' && <img className="h-96 z-10" src={BlobAndre} alt="blob" />}
      {/* < img className="h-96   z-10" src={BlobJess} alt="blob" /> */}
    </div>
  )
}

export default Blob
