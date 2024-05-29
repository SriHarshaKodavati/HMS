import React from 'react'
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";


const Home = () => {
  return (
    <>
      
      <Hero title={"Streamline Your Healthcare Operations with Our Comprehensive Management System"} imageUrl={"../../images/hero-img.jpg"}/>
      <br />
      <br />
      <Biography imageUrl={"../../images/about-pic.jpg"}/>
      <br />
      <br />
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home
