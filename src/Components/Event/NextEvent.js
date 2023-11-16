import React from 'react'
import './../../Style/events/NextEvent.css'
import './../../Style/blogs/BlogThumbnail.css'
import { useNavigate } from 'react-router-dom';
import { style } from '@mui/system';
function NextEvent({url,eventimageone,image,id,eventimagetwo,eventtitle,eventdate,id2}) {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  const originalDateString = eventdate;
  const formattedDate = formatDate(originalDateString);
  const month = formattedDate.slice(0,3);
  const dateActual = formattedDate.slice(4,6);
  const year = formattedDate.slice(8);
  return (
    <>
            <div style={{cursor:"pointer",cursor:"pointer"}}
                className='thumbnailLinks PastEventPoster'
                onClick={() => {
                  navigate(`/event?id=${id2}`);
                  }}
                        >
        <div className='thumbnailContainer'>
              <div className='thumbnailImage'>
              <img src={eventimageone} alt="Description of the image"></img>
            </div>
            <div className='thumbnailDetails'>
            <div className='thumbnailDate'>
                    <p>{month}</p>
                    <p className='date'>{dateActual}</p>
                    <p>{year}</p>
            </div>
                <div className='thumbnailNameDetails'>
                        <div className='thumbnailTitle'>
                            <p  style={{color:"#EB4438",paddingLeft:"8px"}}>{eventtitle}</p>
                        </div>
                        <a href={url} style={{marginLeft:"5px"}}>{url}</a>
                        {/* <div 
                            className='thumbnailLinks' 
                            style={{paddingLeft:"6px",marginTop:"5px"}}
                            onClick={() => {
                                navigate(`/event?id=${id2}`)
                                }
                            }
                        >
                            <a target="_blank">Read More</a>
                        </div> */}
                </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default NextEvent