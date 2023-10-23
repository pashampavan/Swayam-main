import React, { useState } from 'react';
import DeptCard from './DeptCard';

function Dept({deptname}) {
    const [dept,setdept] = useState(0);
    return (
        <div>
            <div className='bdr'>
                
                <div className='deptbar'>
                    <h3>{deptname}</h3>
                    <button className='btn'
                    onClick={
                        ()=>
                        {
                            if(dept===1) setdept(0); 
                            else setdept(1);
                        }
                    }
                    > 
                    +
                    </button>
                </div>


                {
                dept?
                <div className="outerCards">
                    <DeptCard/>
                    <DeptCard/>
                    <DeptCard/>
                    <DeptCard/>
                    <DeptCard/>
                </div>:<div></div>
                }

                </div>
                
                </div>
  
  
  
  
    )
}

export default Dept;