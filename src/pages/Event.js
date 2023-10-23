import React, { useEffect, useState } from 'react'
import Initiatives from '../Components/Event/Initiatives'
import NextEvent from '../Components/Event/NextEvent'
import PastEvents from '../Components/Event/PastEvents'
import Footer from '../Components/HomePage/Footer'
import EventPoster1 from './../illustrations/ecarnivalPast.jpeg'
import EventPoster2 from './../illustrations/event1.jpg'
import EventPoster5 from './../illustrations/planandpitch.jpg'
import EventPoster6 from './../illustrations/ideation.jpg'
import EventPoster7 from './../illustrations/probplethora.jpg'
import EventPoster4 from './../illustrations/esummit.jpg'
import NextEventPoster from './../illustrations/eplexus1.jpg'
import InitiativePoster1 from './../illustrations/interndrive.jpg'
import InitiativePoster2 from './../illustrations/designthinkingworkshop.jpg'
import './../Style/events/NewEvents.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import apiServices from '../services/apiServices'

function Event() {
    const [data, setData] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const navigate = useNavigate();
    const fetchEvents = async () => {
        try {
            const response = await apiServices.fetchAllEvents()
            // const response = await axios.get('https://swayam-website-d9b3d-default-rtdb.asia-southeast1.firebasedatabase.app/events.json');
            setData(response.data);
        } catch (error) {
        console.error('Error fetching Events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

   
    useEffect(() => {
    if (data) {
        const currentDate = new Date();
        const events = Object.values(data);

        const upcoming = events.filter(event => {
        const eventDate = new Date(event.eventdate);
        return eventDate > currentDate;
        });

        const past = events.filter(event => {
        const eventDate = new Date(event.eventdate);
        return eventDate <= currentDate;
        });

        setUpcomingEvents(upcoming);
        setPastEvents(past);
    }
    }, [data]);
  return (
    <>
        <div className='eventsPage'>
            <div className='upcomingEvents'>
                <h2>Upcoming Events</h2>
                {upcomingEvents.length > 0
                    ?
                    <>
                    {upcomingEvents.map((item) => {
                        return <div className='eventItems'>
                             <NextEvent url={item.eventurl} image={item.eventimageone}/>
                         </div>
                    })}
                    </>
                    :
                    <h3>Hold tight, We are planning!</h3>
                }
            </div>
            <hr></hr>
            <div className='Events'>
                <h2>Events</h2>
                
                {pastEvents.length > 0
                    ?
                        <div className='eventItems past'>
                            {pastEvents.map((item) => {
                                return <PastEvents eventName={item.eventtitle} url={item.eventurl} image={item.eventimagetwo}/>    
                            })}
                        </div>
                    :
                    <h3>Hold tight, We are planning!</h3>
                    
                }
               
            </div>
            <hr></hr>
            <div className='Initiatives'>
                <h2>Initiatives</h2>
                <div className='eventItems initiate'>
                    <Initiatives initiativeName="Internship Drive" url="https://photos.app.goo.gl/kXUKoLGi6vVmTxNYA" image={InitiativePoster1}/>
                    <Initiatives initiativeName="Design Thinking Workshop" url="https://photos.app.goo.gl/2LudpFCmkyweJqHv7" image={InitiativePoster2}/>
                    <Initiatives initiativeName="Eplexus" url="https://vasavicollegeofenginee-my.sharepoint.com/:f:/g/personal/swayam_vce_ac_in/Et5E8iUTBBxEtD9QCROafhQBo1MHaPpNhLPQZFCpklvuow?e=rlQ3io" image={NextEventPoster}/>
                    {/* <Initiatives eventName="E Week"/> */}
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Event