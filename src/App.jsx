import { useState } from 'react';
import Context from './Context';

import { 
  HashRouter,
  BrowserRouter,
  Routes, 
  Route } from "react-router-dom";

import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Challenges from './views/Challenges';
import Contact from './views/Contact';
import Blog from './views/Blog';

import './style.css'

function App() {

  const [name, setName] = useState("");
  const contactName = { name, setName };

  return (
    <>
    <Context.Provider
      value={contactName}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Challenges" element={<Challenges />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
    </>
  )
}

export default App;