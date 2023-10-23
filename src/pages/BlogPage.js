import React, { useEffect, useState } from 'react'
import BlogThumbnail from '../Components/BlogPage/BlogThumbnail';
import './../Style/blogs/BlogPage.css'
import Footer from './../Components/HomePage/Footer'
import { useNavigate } from 'react-router-dom';
import apiServices from '../services/apiServices';
const BlogPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const navigate = useNavigate();
  const [blogs, setBlogs] = useState({});

  const fetchBlogs = async () => {
    try {
      const response = await apiServices.fetchAllBlogs();
      // const response = await axios.get('https://swayam-website-d9b3d-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json');
      setBlogs(response.data);
    } catch (error) {
        console.error('Error saving blog:', error);
    }
    }
  useEffect(() => {
    fetchBlogs();
  }, [])

  const blogIds = Object.keys(blogs);

  return (
    <>
        <div className='blogsContainer'>
            <div className='blogsChangingHeading'>
                <h1>Blogs</h1>
                <p>
                We team Swayam is aiming at providing blogs incessantly to feed our audience and students with utilitarian information to enhance their knowledge on various domains. We cover a wide range of essential topics like tips to be productive, entrepreneurial inspirations, analyzing a failed startup, and so on and so forth.                       
                </p>
            </div>
            
            
        </div>
        <div className="tabsContainer">
                <div className="bloc-tabs">
                    <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    >
                    All
                    </button>
                    {/* <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >
                    Articles
                    </button> */}
                    {/* <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                    >
                    Articles
                    </button> */}
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"} >
                        <div className='content-items'>
                            {blogIds.map((blogId) => {
                                    return <BlogThumbnail 
                                        date={blogs[blogId].blogdate} 
                                        blogtitle={blogs[blogId].blogtitle} 
                                        blogdescription={blogs[blogId].blogdescription} 
                                        blogthumbnail={blogs[blogId].blogthumbnail} 
                                        id={blogId}
                                        blogData={blogs[blogId]} />
                                        
                                })}
                        </div>
                        
                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"} >
                        <div className='content-items'>
                            No Items found
                        </div>
                    </div>                
                </div>
        </div>
        <Footer/>
    </>
  )
}

export default BlogPage