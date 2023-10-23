import React from 'react'
import Events from './../Components/HomePage/Events';
import Gallery from '../Components/HomePage/Galler';
import Footer from './../Components/HomePage/Footer';
import Start from './../Components/HomePage/Start';

const HomePage = () =>{
  return (
    <>
        <Start/>
        <Events/>
        <Gallery/>
        <Footer/>
    </>
    
  )
}

export default HomePage