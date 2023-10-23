import React from 'react'
import './../../Style/events/NextEvent.css'

function Initiatives({initiativeName, url, image}) {
  return (
    <>
        <a href={url} target="_blank"style={{
                position:"relative"
              }}>
            <div 
              className='PastEventPoster'
              
            >
                <h1>{initiativeName}</h1>
                {!image && <div class="colorOverlay pastOverlay"></div> }
                {image &&<img 
                  src={image}
                  style={{
                    position:"absolute",
                    top:"0",
                    left:"0",
                    width:"100%",
                    height:"100%",
                    borderRadius:"5px",
                    borderColor:"transparent !important",
                    zIndex:"1"
                  }}
                ></img>}
                
            </div>
            
        </a>
    </>
    // <a href={url} target="_blank">
    //     <div className='PastEventPoster'>
    //         <h1>{initiativeName}</h1>
    //         <div class="colorOverlay pastOverlay"></div>
    //     </div>
    // </a>
  )
}

export default Initiatives