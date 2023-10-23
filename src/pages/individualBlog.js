import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import apiServices from '../services/apiServices';
const IndividualBlog = () => {
  const { id } = useParams();
  const [data,setData] = useState();
  const location = useLocation();
    const fetchBlog = async () => {
      try {
        const response = await apiServices.fetchBlog(id);
        // const response = await axios.get(`https://swayam-website-d9b3d-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/${id}.json`);
        console.log(response.data)
        setData(response.data)
      } catch (error) {
          console.error('Error saving blog:', error);
      }
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
      };

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <>
    {data && <div className='getInvolvedPage' style={{width:"60%"}}>
        <h3 style={{margin:"5px auto"}}><b>{data.blogtitle}</b></h3>
        <p>{formatDate(data.blogdate)}</p>
        <img src={data.blogthumbnail} width={'100%'}></img>
        {data.blogcontent.map((item, id) => {
            if('heading' in item)
              return <h4 style={{width:"100%", margin:"20px auto"}}><b>{item.heading}</b></h4>
            else if('subheading' in item)
              return <h5 style={{width:"100%", margin:"20px auto"}}><b>{item.subheading}</b></h5>
            else if('paragraph' in item)
              return <p style={{width:"100%", margin:"20px auto"}}>{item.paragraph}</p>
            else if('image' in item)
              return <img width={'100%'} src={item.image}></img>
            else if('quote' in item)
              return <div style={{width:"100%", margin:"20px auto", backgroundColor:"lightblue", fontStyle:'italic', padding:"14px", borderLeft:"5px solid #065f7d"}}>"{item.quote}"</div>
            else if('note' in item)
              return <div style={{width:"100%", margin:"20px auto", fontStyle:'italic', padding:"14px", borderLeft:"5px solid #eb4438"}}>Note: {item.note}</div>
        })}
    </div>}
    </>
  )
}

export default IndividualBlog