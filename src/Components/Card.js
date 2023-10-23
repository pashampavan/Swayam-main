import React, { useState } from 'react';
import '../Style/Card.css'
export default function Card({name,title,rollno,gmaillink,linkedin,profileimage}) {
  return (
    <div className='card'>
        
        <div className='bd'>
          <img className='crop' src={profileimage} alt='Profile Card'/>
        </div>
        
        <div className='belowimg'>
          { name?<h3>{name}</h3>:<h3>Scott</h3> }
          { title?<p>{title}</p>:<p>No Data Yet</p> }
          <p>{rollno}</p>
          

          <div className='social'>
            <a 
              rel='noreferrer'
              target="_blank"
              href={linkedin}>
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="23px" height="23px"><path d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"/></svg>
            </a>

            {/* <a 
              rel='noreferrer'
              target="_blank"
              href={gmaillink}>
              <img src='https://icons8.com/icon/38158/gmail-logo'></img>
            </a> */}
          </div>
        </div>
    </div>

  )
}
