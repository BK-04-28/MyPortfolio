import React from 'react';
import './Menus.css';
import { Link } from 'react-scroll';
import { FcHome,FcAbout, FcBiotech, FcReading, FcVideoProjector, FcBusinessContact } from "react-icons/fc";
const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
        <div className="navbar-profile-pic">
        <img src='pic.jpeg' alt='profile'/>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <Link to='home'>
            <FcHome/>Home
            </Link>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to='about'>
            <FcAbout/>About
            </Link>  
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to='education'> 
            <FcReading/>Education
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to='technologies'>
            <FcBiotech/>Tech Stack
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to='project'>
            <FcVideoProjector/>Projects
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to='contact' >
            <FcBusinessContact/>Contact
            </Link>
            </div>
        </div>
      </div>
      </>
      ) : (
        <>
        <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link" >
          <Link to='home'>
            <FcHome title='Home'/>
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link to='about'>
            <FcAbout title='About'/>
            </Link> 
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link" >
          <Link to='education'> 
            <FcReading title='Education'/>
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link" >
          <Link to='technologies'>
            <FcBiotech title='Technologies'/>
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link" >
          <Link to='project'>
            <FcVideoProjector title='Projects'/>
            </Link>
            </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link to='contact' >
            <FcBusinessContact title='Contact'/>
            </Link>
            </div>
        </div>
      </div>
        </>
      )}
      
    </>
  )
}

export default Menus
