import { 
  BrowserRouter,
  Routes, 
  Route } from "react-router-dom";

import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Blog from './views/Blog';

import './style.css'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;