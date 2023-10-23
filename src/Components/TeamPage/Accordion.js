import React, { useState } from 'react';
import './../../Style/team/TeamPage.css'
import TeamMember from './TeamMember';
import Data from './../../constants/data'
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
    const TeamMembers = [
        {
            name:"John",
            rollNo:"1602-19-737-142",
            branchSection:"IT-C",
            department:""
        },
        {
            name:"Raj",
            rollNo:"1602-19-737-143",
            branchSection:"CSE-C",
            department:""
        },
        {
            name:"John",
            rollNo:"1602-19-737-142",
            branchSection:"IT-C",
            department:""
        },
        {
            name:"Raj",
            rollNo:"1602-19-737-143",
            branchSection:"CSE-C",
            department:""
        },
        {
            name:"John",
            rollNo:"1602-19-737-142",
            branchSection:"IT-C",
            department:""
        },
        {
            name:"Raj",
            rollNo:"1602-19-737-143",
            branchSection:"CSE-C",
            department:""
        },
    ];
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='accordionDeptName'>{title}</div>
        {isActive ? <div>-</div> : <div>+</div>}
      </div>
        {isActive && <div className="accordion-content">
            {Data.map((member) => {
              if(member.department === title)
                return <TeamMember name={member.name} rollNo={member.rollNo} branchSection={member.branchSection}/>
            })}
        </div>}
    </div>
  );
};

export default Accordion;