import React from 'react'
import { IoSchool } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>
      <div className="education"id='education'>
      <h1 className='col-10 mt-3 mb-1 text-center'>Education Details</h1>
      <hr/>
      <VerticalTimeline>
           <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
           date="2022-2025"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<IoSchool />}
          >
             <h3 className="vertical-timeline-element-title">BSC</h3>
             <h4 className="vertical-timeline-element-subtitle">AGL Degree College , Viziangaram</h4>
          </VerticalTimelineElement>
         <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
           date="2020-2022"
           iconStyle={{ background: 'rgb(33, 172, 237)', color: '#fff' }}
           icon={<IoSchool />}
          >
             <h3 className="vertical-timeline-element-title">MPC</h3>
             <h4 className="vertical-timeline-element-subtitle">NRI Junior College , Viziangaram</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
           date="2019-2020"
           iconStyle={{ background: 'rgb(33, 172, 237)', color: '#fff' }}
           icon={<IoSchool />}
          >
             <h3 className="vertical-timeline-element-title">10<sup>th</sup></h3>
             <h4 className="vertical-timeline-element-subtitle">BPMM High School , Viziangaram</h4>
          </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
