import React from 'react'
import './../../Style/home/footer.css'
import Logo from '../../images/logo.png'
import Redirect from '../../images/redirect.png'
import Instagram from './../../icons/instagram.png'
import LinkedIn from './../../icons/linkedin.png'
import Gmail from './../../icons/gmail.png'
import {Link} from 'react-router-dom'

export default function Footer() {
  return ( 
  <>
    <div className="footer">
      <div className="rows">
        <div className="cols">
          <img src={Logo} width="60%" style={{margin:'2% 20%'}}></img>
          <h2>
            Address:
          </h2>
          <p>
            9-5-81, Swayam E-Cell
            Vasavi College of Engineering, Ibrahimbagh,
            Hyderabad-500 031
            Telangana,India<br></br><br></br>
            <a href="https://goo.gl/maps/TrSkpbMGrMUT8yhJ6" target="_blank" className='mapLink'>View it on Map</a> <span><img src={Redirect} width="15px"></img></span>
          </p>
          
          {/*  */}
        </div>
        <div class="cols">
          <div className='quickLinks'>
            <div className='linksOne'>
              <ul>
                <li className='footerHeadings'><b>Quick Links</b></li>
                <li><a href='https://vce.ac.in' target="_blank">VCE</a></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className='linksTwo'>
              <ul>
                <li className='footerHeadings'><b>Initiatives</b></li>
                <li><a href='https://photos.app.goo.gl/kbhYhqA4zc7aEyk49' target="_blank">E Week</a></li>
                <li><a href='https://docs.google.com/document/d/1qIsT_op7yNwWNMyKvVxeDzezq0JBPr9ir5sK90QKxKI/edit?usp=sharing' target="_blank">E Summit</a></li>
                <li><a href='https://vce.ac.in/CampusLife/Swayam_reports.cshtml' target="_blank">Ideation Contest</a></li>
                <li><a href='https://photos.app.goo.gl/kXUKoLGi6vVmTxNYA' target="_blank">Internship Drive</a></li>
              </ul>
            </div>
            <div className='linksThree'>
              <ul>
                <li className='footerHeadings'><b>Contact</b></li>
                <li><b>Phone</b></li>
                <li><a href="tel:+919618260962" target="_blank">+91 9618260962</a></li><br></br>
                <li><b>Email</b></li>
                <li><a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=swayam@vce.ac.in&tf=1' target="_blank" >swayam@vce.ac.in</a></li>
              </ul>
            </div>
          </div>
          <div className='socialsAndCopyright'>
            <div>
              &copy; All Rights Reserved | Swayam - VCE
            </div>
            <div className='socialLinks'>
              <a href='https://www.instagram.com/ecellvce/'  target="_blank" ><img src={Instagram} width="20px"></img></a>
              <a href=' https://www.linkedin.com/company/swayam-e-cell/mycompany/' target="_blank" ><img src={LinkedIn} width="20px"></img></a>
              <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=swayam@vce.ac.in&tf=1' target="_blank" ><img src={Gmail} width="25px"></img></a>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    
  </>
  )
}
