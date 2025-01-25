import React from 'react'
import './Projects.css';

const Projects = () => {
  return (
    <>
        <div className="container project" id='project'>
        <h1 className='col-12 mt-3 mb-1 text-center'>Recent projects</h1>
            <hr/>
            <p className='pb-3 text-center'>👉This is my projects including programming languages HTML,CSS and JAVA SCRIPT</p>
          {/* designing card */}
            <div className="row" id='ads'>
                <div className="col-md-4">
                    <div className="card rounded">
                         <div className="card-image">
                            <span className="card-notify-badge">Front-end</span>
                            <img src='airbnb.jpeg' alt='project'/>
                         </div>
                         <div className="card-image-overly m-auto mt-3">
                            <span className="card-detail-badge">HTML</span>
                            <span className="card-detail-badge">CSS</span>
                         </div>
                         <div className="card-body text-center">
                            <div className="ad-title">
                                <h5 className='text-uppercase '>Airbnb WebPage</h5>
                            </div>
                            <a  className='ad-btn pt-2' href="https://github.com/BK-04-28/Airbnb-page">View</a>
                         </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded">
                         <div className="card-image">
                            <span className="card-notify-badge"> Front-end</span>
                            <img src='calculator.jpeg' alt='project'/>
                         </div>
                         <div className="card-image-overly m-auto mt-3">
                            <span className="card-detail-badge">HTML</span>
                            <span className="card-detail-badge">CSS</span>
                            <span className="card-detail-badge">JAVASCRIPT</span>
                         </div>
                         <div className="card-body text-center">
                            <div className="ad-title">
                                <h5 className='text-uppercase '>Age Calculator</h5>
                            </div>
                            <a  className='ad-btn pt-2' href="https://github.com/BK-04-28/calculator">View</a>
                         </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded">
                         <div className="card-image">
                            <span className="card-notify-badge"> Front-end</span>
                            <img src='guess.jpeg' alt='project'/>
                         </div>
                         <div className="card-image-overly m-auto mt-3">
                            <span className="card-detail-badge">HTML</span>
                            <span className="card-detail-badge">CSS</span>
                            <span className="card-detail-badge">JAVASCRIPT</span>
                         </div>
                         <div className="card-body text-center">
                            <div className="ad-title ">
                                <h5 className='text-uppercase '>Guess My Number</h5>
                            </div>
                            <a  className='ad-btn pt-2' href="https://github.com/BK-04-28/Guess-Game">View</a>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Projects
