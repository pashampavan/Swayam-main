import React from 'react'
import "./../../Style/events/event.css"

export default function Events() {
  return (
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
  )
}
