import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'
import Logo from './../images/logo.png'
import Instagram from './../icons/instagram.png'
import LinkedIn from './../icons/linkedin.png'
import Gmail from './../icons/gmail.png'

function NavBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [checked, setChecked] = React.useState(false);
  return (
    <>
    <div className='navContainer'>
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo}></img>
          </Link>
        </div>
        <div className='navItems'>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/team">
                Team
              </Link>
            </li>
            <li>
              <Link to="/events">
                Events
              </Link>
            </li>
            <li>
              <Link to="/getinvolved">
                Get Involved
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="hamburgerMenu">
        <div className={isClicked ? "hamburgerMenuContent show": "hamburgerMenuContent"} id="hamburgerId">
            <ul>
                {/* <li><Link to='/'><img src={Logo}></img></Link></li>
                <li></li> */}
                <li id="1">
                  <Link to="/" 
                    onClick={() => {
                      setIsClicked(!isClicked);
                      setChecked(!checked);
                      }}
                    >HOME
                  </Link>
                </li>
                <li id="2">
                  <Link to="/about" 
                  onClick={() => {
                    setIsClicked(!isClicked);
                    setChecked(!checked);
                  }}
                    >ABOUT
                  </Link>
                </li>
                <li id="3">
                  <Link to="/blogs" 
                    onClick={() => {
                      setIsClicked(!isClicked);
                      setChecked(!checked);
                      }}>BLOGS
                  </Link>
                </li>
                <li id="4">
                  <Link to="/team" 
                    onClick={() => {
                      setIsClicked(!isClicked);
                      setChecked(!checked);
                      }}>TEAM
                  </Link>
                </li>
                <li id="5">
                  <Link to="/events" 
                    onClick={() => {
                      setIsClicked(!isClicked);
                      setChecked(!checked);
                      }}>EVENTS
                  </Link>
                </li>
                <li id="6">
                  <Link to="/getinvolved" 
                    onClick={() => {
                      setIsClicked(!isClicked);
                      setChecked(!checked);
                      }}>GET INVOLVED
                  </Link>
                </li>
                <li id="7">
                  <Link to="/contact" 
                    onClick={() => {
                      setIsClicked(!isClicked);
                      setChecked(!checked);
                      }}>CONTACT US
                  </Link>
                </li>
            </ul>

            <div className="menuFooter">
                {/* <div className="leftLogo">
                  <img src={Logo} width="60px"></img>
                </div> */}
                <div className="rightSocials">
                  <a href='https://www.instagram.com/ecellvce/'  target="_blank" ><img src={Instagram} width="20px"></img></a>
                  <a href=' https://www.linkedin.com/company/swayam-e-cell/mycompany/' target="_blank" ><img src={LinkedIn} width="20px"></img></a>
                  <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=swayam@vce.ac.in&tf=1' target="_blank" ><img src={Gmail} width="25px"></img></a>
                </div>
            </div>
        </div>
        <div className="hamburgerMenuLine" id="hamMenuId">
            {/* <Link to="/">yes</Link> */}
            <input type="checkbox" checked={checked} className="toggler" 
            onClick={() => {
              setIsClicked(!isClicked);
              setChecked(!checked)
            }} 
            name="" id="toggle"></input>
            <div className="hamburger"></div>
        </div>
        
    </div>
      
    </>
  );
}

export default NavBar