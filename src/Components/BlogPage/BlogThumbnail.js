import React from 'react'
import './../../Style/blogs/BlogThumbnail.css'
import './../../Style/events/NextEvent.css';
import { useNavigate } from 'react-router-dom';
function BlogThumbnail({blogtitle,blogdescription,date, blogthumbnail, id}) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
      };
      const navigate = useNavigate();
      const originalDateString = date;
      const formattedDate = formatDate(originalDateString);
      console.log(formattedDate); // Output: Jul 06, 2023
      const month = formattedDate.slice(0,3)
      const dateActual = formattedDate.slice(4,6)
      const year = formattedDate.slice(8)
  return (
    <>
        <div className='thumbnailContainer' style={{cursor:"pointer"}}
        onClick={() => {
            navigate(`/blog/${id}`);
            }
        }
        >
            <div className='thumbnailImage'>
                <img src={blogthumbnail} alt="Description of the image"></img>
            </div>
            <div className='thumbnailDetails'>
                <div className='thumbnailDate'>
                    <p>{month}</p>
                    <p className='date'>{dateActual}</p>
                    <p>{year}</p>
                </div>
                <div className='thumbnailNameDetails'>
                        <div className='thumbnailTitle'>
                            <p>{blogtitle}</p>
                        </div>
                        <div className='thumbnailDescription'>
                            <p>{blogdescription}</p>
                        </div>
                        {/* <div 
                            className='thumbnailLinks' 
                            onClick={() => {
                                navigate(`/blog/${id}`)
                                }
                            }
                        >
                            <a target="_blank">Read More</a>
                        </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogThumbnail