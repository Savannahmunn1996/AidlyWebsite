
import Container from "./components/Container"

import AnimCursor from "./components/AnimCursor"
import ReactPlayer from 'react-player'
import {
  HashRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';

import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Aides from './components/pages/Aides';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Foot from './components/Foot'
import { useLocation } from 'react-router-dom';
import Sticky from 'react-stickynode';



function App({}) {


  const [darkMode, setDarkMode] = useState(false);


  const [theme, setTheme] = useState('default');
  


  return (
    <>
      <Router>
        <AnimCursor />

        <div className="bg-back flex flex-col bg-auto" >

          <div className="flex flex-col min-h-screen ">
            <Sticky enabled={true} top={0} innerZ={2}>
              <header>
                <Navbar
                  setTheme={setTheme}
                  theme={theme}
                  setDarkMode={setDarkMode}
                  darkMode={darkMode}
                />

              </header>
            </Sticky>

            <main className="flex-grow">

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/aides">
                  <Aides darkMode={darkMode} theme={theme} setTheme={setTheme} />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
              </Switch>

            </main>
            <footer>
             <Foot></Foot>
              
            </footer>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
