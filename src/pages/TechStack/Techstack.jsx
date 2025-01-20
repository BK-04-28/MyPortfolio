import React from 'react'
import './Techstack.css'
import { TechstackList } from '../TechstackList/techstackList'

const Techstack = () => {
  return (
    <>
       <div className='container techstack' id='technologies'>
            <h1 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h1>
            <hr/>
            <p className='pb-3 text-center'>👉including programming languages HTML,CSS,JAVA SCRIPT,REACT JS and BOOTSTRAP FRAME WORK</p>
            <div className="row List">
               {TechstackList.map((tech) =>(
                   <div className="col-md-4">
                      <div className="card m-3">
                          <div className="card-content">
                              <div className="card-body">
                                 <div className="media d-flex justify-content-center">
                                     <div className="align-self-center">
                                         <tech.icon className='tech-icon' />
                                     </div>
                                     <div className="media-body">
                                         <h5>{tech.name}</h5>
                                     </div>
                                 </div>
                              </div>
                          </div>
                      </div>
                   </div>
               ))}
            </div>
       </div>
    </>
  )
}

export default Techstack
