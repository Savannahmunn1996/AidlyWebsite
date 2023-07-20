import React, { useState } from 'react'
import stylz from "../index.css"

const DownloadButton = ({ theme }) => {
  // [className, setClassName] = useState('')
  // useEffect((theme) => setState('class name string'))

  /*

  <button class=className>
 Download
</button>
  */
  






  return (
    <div>
      <a href="https://apps.apple.com/us/app/aidly-ai-chat/id6446067509" target="_blank" rel="noopener noreferrer" >
        {theme === 'orange' &&
          <button
            className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">

            Download
          </button>
        }
        {theme === 'pink' && <button className="bg-gradient-to-r from-red-200 via-pink-100 to-red-100 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
        {theme === 'blue' && <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900  text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
        {theme === 'purple' && <button className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
        {theme === 'red' && <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
        {theme === 'ian' && <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
        {theme === 'lex' && <button className="bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
        {theme === 'green' && <button className="bg-gradient-to-r from-green-400 via-green-600 to-green-700 text-black font-bold py-2 px-4 rounded-full transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out">
          Download
        </button>}
      </a>
    </div>
  )
}

export default DownloadButton