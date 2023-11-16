import React,{useState} from 'react'
import '../Style/about/AboutUsPage.css'
import {Dept} from '../utils/People'
import Footer from './../Components/HomePage/Footer'
import Arts from './../illustrations/arts.svg'
import Hr from './../illustrations/hr.svg'
import Incubation from './../illustrations/incubation.svg'
import Web from './../illustrations/web-development.svg'
import Content from './../illustrations/content.svg'
import Events from './../illustrations/event-management.svg'
import Marketing from './../illustrations/marketing.svg'
import Pr from './../illustrations/pr.svg'


const AboutUsPage = () => {
  const mappings = {
    "Incubation and Investments":Incubation,
    "Human Resources":Hr,
    "Event Management":Events,
    "Content Creation":Content,
    "Web Design and Development":Web,
    "Arts":Arts,
    "Marketing":Marketing,
    "Public Relations":Pr
  }
    return (
    <>
        <div className='imageee'>
        </div>
        <div className='heads'>
          <div className='aboutLeft'>
              <p>Our</p><br></br>
              <p>Mission</p><br></br>
              <span><p>& Vision</p></span><br></br>
          </div>
          <div className='aboutRight'>
            <p>
            Swayam, The Entrepreneurship Development Cell of Vasavi College of Engineering represents the endeavors, 
            ideas, hard work, and aspirations of everyone associated with it. 
            The vision of Swayam is to foster entrepreneurs by developing an ecosystem that streamlines the entrepreneurial potential of enthusiasts. 
            </p><br></br>
            <p>
            The mission of swayam is to develop and nurture entrepreneurial skills in the students. 
            This cell focuses on creating a supporting and educating environment for aspiring entrepreneurs and help them in converting their ideas into business ventures.
            </p><br></br>
          </div>
        </div>
    
      <div className='history'>
      <div className='main'>
        <h1 className='about'>History</h1>
      <div class="containers">
        <ul>
                    <li>
                        <h3 class="heading">Establishment</h3>
                        <p>Swayam - Vasavi's own E-Cell has been established by Dr. T. Ram Mohan Rao, Professor and HOD, Dept of Mechanical Engineering.</p>
                        <span class="date">2014</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Smart E-Challenge by NEN</h3>
                        <p>NEN has launched SmartE – The Apprentice Challenge Powered by First Advantage, a nationwide competition for students teaching the nuances ofventure creation through experiential learning</p>
                        <span class="date">2015</span>
                        <span class="circle"></span>
                    </li>
                    
                    <li>
                        <h3 class="heading">Ideation Contest</h3>
                        <p>Ideation contest, an innovative initiation from Swayam is brought onto the stage to galvanize the Galileos shrouded in students’ brains.</p>
                        <span class="date">2015</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Design Thinking workshop</h3>
                        <p>Swayam sowed the seeds of a new event that is aimed at letting studentpreneurs learn practically from the people who are the best in the business.</p>
                        <span class="date">2015</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Gaon Udayami</h3>
                        <p> Rural Micro Entrepreneurs Capacity Building Program (One day workshop).</p>
                        <span class="date">2016</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">E Summit</h3>
                        <p>It stands as the biggest event organized by Swayam, which intends to inculcate entrepreneurship among the students.</p>
                        <span class="date">2016</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Internship Drives</h3>
                        <p>Swayam brought internship drives onto the road in our college to make our students industry-ready and familiar with how businesses/markets run.</p>
                        <span class="date">2017</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">E Week</h3>
                        <p>A week-long event in which learning and fun go hand in hand. It is an amalgamation of many events that intrigue the students' innovative brains.</p>
                        <span class="date">2018</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">TIE Grad Program</h3>
                        <p>This program was organised by TiE Hyderabad to enable students to develop entrepreneurial mindset and encourage to build on their own business ideas.</p>
                        <span class="date">2019</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Best E-Cell in Telangana</h3>
                        <p>Swayam has being awarded the title of Best E-Cell in Telangana for it's initiatives around entrepreunership.</p>
                        <span class="date">2019</span>
                        <span class="circle"></span>
                    </li>
        </ul>
        <div className='line'>

        </div>
      </div>
      </div>
    </div>
    <br></br>
   <div className='about history'>
      <h1>Departments</h1>
    </div>
    <div className='deptspace'>
      {Dept.map((names) => {
        return <div className={(names.id%2 === 0) ?'deptInformation r':'deptInformation l'}> 
          <div className='deptImage'>
            <img src={mappings[names.name]} alt="Description of the image"></img>
          </div>
          <div className='deptContent'>
            <div className='deptName'>{names.name}</div>
            <div className='deptDescription'>{names.descrip}</div>
          </div>
          
        </div>
      })}
    </div>
    <Footer/>
    
    </>
  )
}

export default AboutUsPage

