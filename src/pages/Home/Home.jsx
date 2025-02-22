import React from 'react'
import { useTheme } from '../../Context/ThemeContext';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import resume from '../../Resume/BharathkumarKunkipudiResume.pdf'

const Home = () => {
  const [theme ,setTheme]=useTheme();
  const handleTheme =()=>{
    setTheme((prevState)=>(prevState === "light" ? "dark" :"light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <BsFillMoonStarsFill size={20}/> : <IoSunny size={20}/>}
        </div>
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
          <Typewriter
              options={{
               strings: ['Junior web developer'],
               autoStart: true,
               loop: true,
               }}
          />
          </h1>
          <div className="home-buttons">
            <button className='btn btn-hire'>Hire Me</button>
            <a href={resume} className='btn btn-cv' download='resume'>My Resume</a>
          </div>
        </div>
        </div> 
    </>
  )
}

export default Home
