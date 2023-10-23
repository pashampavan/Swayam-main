import React from 'react'
import './../../Style/team/TeamPage.css'

function TeamMember({name,rollNo,branchSection}) {
  return (
    <div className='teamMember'>
        <h5>{name}</h5>
        <p>{rollNo}</p>
        <p>{branchSection}</p>
    </div>
  )
}

export default TeamMember