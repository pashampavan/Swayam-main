import React, { useState } from 'react'
import './../../Style/home/gallery.css'
import { Gallery } from "react-grid-gallery";
import images from "./../../illustrations/images.js";

export default function Galler() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = () => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  
  return (
    <>
      <div class="about">
        {/* <img className="svgs" src={Svg}></img> */}
        <br></br><br></br>
        <h3>Swayam At a Glance</h3>
        <br></br>
      </div>
      <div className='gallery'>
        <Gallery
          images={images}
          enableImageSelection={false}
        />
        
      </div>
      
     
    </>
//     <div className="slides">
//         <h2>Gallery</h2>
// <div className="float-container main ">
// <div className="float-child col-lg-3 col-md-6 col-sm-12">
//   <div>
//   <img className="col-12 img1" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
//   </div>
//   <img className="col-12 img2" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
//   </div>
// <div className="float-child col-lg-3 col-md-6 col-sm-12">
//   <div>
//   <img className="col-12 img2" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
//   </div>
//   <img className="col-12 img1" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
// </div>
// <div className="float-child col-lg-3 col-md-6 col-sm-12">
//   <div>
//   <img className="col-12 img3" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"/>
//   </div>
// </div>
// <div className="float-child col-lg-3 col-md-6 col-sm-12">
//   <div>
//   <img className="col-12 img4" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
//   </div>
//   <div className="float-container">
//     <div className="float-child">
//       <div>
//       <img className="col-12 img5" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
//       </div>
//       <img className="col-12 img6" src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"/>
//     </div>
//     <div className="float-child">
//       <div>
//       <img className="col-12 img4" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"/>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// <div className="main">
// <div className="float-container">
//   <div className="float-child col-lg-4 col-md-12 font">
//     <center>
//     <i class="fa-brands fa-square-facebook fa-3x"></i>
//       <h1 className="num">506</h1>
//     <h3>Facebook Likes</h3>
//     </center>
//   </div>
//   <div className="float-child col-lg-4 col-md-12 font">
//     <center>
//     <i class="fa-brands fa-instagram fa-3x"></i>
//       <h1 className="num">245</h1>
//     <h3>Instagram Followers</h3>
//     </center>
//   </div>
//   <div className="float-child col-lg-4 col-md-12 font">
//     <center>
//     <i class="fa-brands fa-linkedin fa-3x"></i>
//       <h1 className="num">299</h1>
//     <h3>LinkedIn Followers</h3>
//     </center>
//   </div>
// </div>
// </div>
//     </div>
  )
}
