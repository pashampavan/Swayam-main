import React from 'react'
import './../../Style/home/start.css'
export default function Start() {
  return (
   <>
	<div className='landingPage'>
		<div className='landingPageText'>
			<h1>Swayam</h1>
			<p>Ecell - VCE</p>
			<p>Incubating Innovation</p>
		</div>
		{/* <div className='homePageSVG'>
			<img src={HomePageVector}></img>
		</div> */}
	</div>
	<div className='aboutContainer'>
		<div class="about">
			<h3>About us</h3>
		</div>
		<div class="aboutContent">
		<img src="download.png" alt=""/>
		<div class="about_text">
			<p>Since our inception in 2012, we have always been truthful to our roots. 
				We are a team of enthusiastic and passionate individuals who aspire to be entrepreneurs. 
				We strongly believe that innovation comes from creating an environment where ideas can connect. 
				We strive to unleash our dormant innovative potential through constant collaboration, nourishment of entrepreneurial ideals and the quest to find new opportunities.
			</p>
		</div>
		</div>

		<div class="about">
			{/* <img className="svgs" src={Svg}></img> */}
			<h3>What We Do</h3>
		</div>
		<div class="aboutContent">
		<img src="download.png" alt=""/>
		<div class="about_text">
			<p>Swayam, the ED-Cell of Vasavi College of Engineering, organizes a myriad of events in our campus throughout the year to inculcate the entrepreneurial spirit in our fellow students. 
				Some of the events include E-Talks, competitions, fun-filled carnivals, and Workshops. 
				Our annual flagship event, the Ideation Contest provides the contestants an opportunity to take their business ideas further at our Incubation Cell.
			</p>
		</div>
		</div>
		<div className="event">
			<div className='cardHeading'><h3>Our Flagship Events</h3></div>
			<div className="cards">
				<div className='cardItem'>
				<h3>Ideation Contest</h3>
				<p>
				Ideation Event of Entrepreneurship Cell Swayam ,aimed at fueling the entrepreneurial spirit in the students, held start-up founders, and educating the inquisitive minds to create an innovation driven start-up culture.
				</p>
				<a href='https://vce.ac.in/CampusLife/Swayam_reports.cshtml' target="_blank">Know More</a>
				</div>
				<div className='cardItem'>
				<h3>E Summit</h3>
				<p>
				The E-Summit hosted by the Entrepreneurship and Innovation Cell will aim to explore and connect with businesses and individuals that displayed unwavering resilience and strength to adapt to circumstances of any sort
				</p>
				<a href='https://docs.google.com/document/d/1qIsT_op7yNwWNMyKvVxeDzezq0JBPr9ir5sK90QKxKI/edit?usp=sharing' target="_blank">Know More</a>
				</div>
				<div className='cardItem'>
				<h3>E Week</h3>
				<p>
				The E- week hosted by the Entrepreneurship and Innovation cell will be a one week occasion for students to interface with organisations and people that showed steady versatility and saw a huge number of famous industry specialists and persuasive speakers share their accounts and experiences.
				</p>
				<a href='https://photos.app.goo.gl/kbhYhqA4zc7aEyk49' target="_blank">Know More</a>
				</div>
			</div>
			</div>
	</div>
   </>
  )
}
