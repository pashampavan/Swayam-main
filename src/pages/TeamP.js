import React from 'react';
import Card from '../Components/Card'
import '../Style/team/TeamPage.css';
import { useState } from 'react';
import Accordion from './../Components/TeamPage/Accordion';
import { accordionData } from './../utils/Content';
import Footer from './../Components/HomePage/Footer'
import Boardmember from './../constants/boardmem'
const TeamP = () => {
    const [yearslt,setyearslt] = useState("22-23");
    const AllMembers=[
        {
            tag:"founder",
            name:"DR. T. Rammohan Rao",
            role:"Founder of E-Cell",
            // year:"2122",
        },
        {
            tag:"founder",
            name:"Mr. N. David Raju",
            role:"E-Cell Coordinator",
            // year:"2122"

        },
        {
            tag:"founder",
            name:"Mr. K. I. Spurgeon",
            role:"E-Cell Coordinator",
            // year:"2122",

        },
        {
            tag:"core",
            name:"Suresh Nitin",
            role:"President",
            year:"2122",
        },
        {
            tag:"core",
            name:"Vivekavardhini",
            role:"Vice-President",
            year:"2122",

        },
        {
            tag:"core",
            name:"Srikar Maddula",
            role:"President",
            year:"2021",

        },
        {
            tag:"core",
            name:"Aishwarya. P",
            role:"Vice-President",
            year:"2021",

        },
        
        {
            tag:"head",
            name:"Naveen Manda",
            role:"Head of Web Dev",
            year:"2122",

        },
        {
            tag:"head",
            name:"Hima Satwika",
            role:"Head of PR",
            year:"2122",

        },
        {
            tag:"head",
            name:"Rahul Pothana",
            role:"Head of Content Creation",
            year:"2122",

        },
        {
            tag:"head",
            name:"Anirudh Chebolu",
            role:"Head of Incubation",
            year:"2122",

        },
        {
            tag:"head",
            name:"Sai Jaswanth Gudibandi",
            role:"Head of Web Development",
            year:"2021",

        },
    ]
  return (
    <>
    <div className="teamPage">
      {/* <div className='selectOption'>
        <span>
            <select 
            onChange={(event)=>
            {
                console.log(event.target.value);
                setyearslt(event.target.value);
            }}    
            className='select'>
                <option value="2122" >2021-22</option>
                <option value="2021" >2020-21</option>
            </select>
        </span>
      </div> */}
      

      <h2>Overall Coordinators</h2>
      <div className='outerCards core'>
      {Boardmember.map(
            (val)=>
            {
                if((val.title==="President" || val.title==="Vice President" )) return <Card name={val.head} title={val.title} rollno={val.rollno} gmaillink={val.gmail} linkedin={val.linkedin} profileimage={val.imageSource}/>
                else <Card/>
            }
        )
      }
      </div>
      {/* <Card/> */}
      <h2>Department Heads</h2>
      <div className='outerCards headOfDepts'>
      
      {
        Boardmember.map(
            (val)=>
            {
                if(val.title != "President" && val.title != "Vice President")
                {
                return(
                    <Card name={val.head} title={val.title} rollno={val.rollno} gmaillink={val.gmail} linkedin={val.linkedin} profileimage={val.imageSource}/>
                )
                }
                else
                {
                    <Card/>
                }
            }
        )
      }
      
      </div>

        <div>
        <h1>Departmentwise Team Members</h1>
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
            ))}
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default TeamP