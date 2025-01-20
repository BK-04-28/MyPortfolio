import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Techstack from './pages/TechStack/Techstack';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './Context/ThemeContext';



function App() {
  const [theme] =useTheme();
  return (
    <>
      <div id={theme}className=''>
      
       <Layout/>
         <div className='container'>
          <About/>
          <Education/>
          <Techstack/>
          <Projects/>
          <Contact/>
         </div>
         </div>

         <ScrollToTop smooth
          color='white'
          style={{backgroundColor:"black" ,borderRadius:"80px"}}
          />
        
    </>
  );
}

export default App;
