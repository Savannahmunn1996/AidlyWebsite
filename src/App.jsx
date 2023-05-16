
import Container from "./components/Container"
import Navbar from "./components/Navbar"
import Aides from "./components/pages/Aides"
import Home from "./components/pages/Home"


function App() {
 
  return (
    <div>
   <div><Navbar></Navbar></div>
  
 <div><Home/>
 <Aides/>

   </div>

   </div>
   )
}

export default App
