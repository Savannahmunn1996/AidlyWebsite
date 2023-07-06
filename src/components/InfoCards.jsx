import React from 'react'

import Tech from "./Tech"

const InfoCards = () => {
  return (<>
    {/* <div className=" grid grid-cols-2 gap-4 place-content-evenly  ">
    <div className =" bg-lime-300 w-80 h-80 md:w-96 md:h-96  border-yellow-200 justify-center items-center ">
<h1 className='text-orange-400 text-4xl ml-16 mt-12'>Atlan</h1>
<h1 className='text-orange-400 text-5xl m'>Your Travel Guide In Your Pocket</h1>
    </div>
    </div> */}
    <card className='grid grid-cols-1   mx-auto  gap-2   items-center'>
    <h1 className='text-orange-400 text-4xl ml-12 md:ml-40'>Atlan</h1>
    <h1 className='text-orange-400 text-6xl mt-16 md:mt-40 ml-12 md:ml-40'>Your Travel Guide In Your Pocket</h1>
    <h1 className='text-orange-300 text-5xl mt-8 md:mt-12 ml-12 md:ml-40'>Destinations, Itineraries, Flights, Hotels</h1>
    </card>
    <Tech/>

    </>
  )
}

export default InfoCards