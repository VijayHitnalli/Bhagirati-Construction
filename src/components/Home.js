import React, { useState } from 'react'
import { FaDraftingCompass, FaEnvelope, FaHammer, FaMapMarkerAlt, FaPhone, FaTools } from "react-icons/fa";

import "../App.css"

const Home = () => {
  const[form,setForm]=useState({name:"",email:"",message:""});

  const handleChange=(e)=>{
    setForm({  ...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Thank you! We will get in touch soon...")
  }

  return (
<div className='w-full'>
    <div className='hero-section' style={{backgroundImage: "url('/Images/DALL·E 2025-03-27 22.40.22 - A high-resolution image of a beautifully designed laterite stone building, featuring earthy red-brown bricks with a traditional yet modern architectur.webp')"}}>
      <h1 className='hero-heading'>Bhagirati Construction</h1>
      <p className='hero-subtext'>We build what you think</p>
      <button className='hero-button'>Request a Consultation</button>
    </div>

    <section className='about-section'>
      <h2 className='about-heading'>About Us</h2>
      <p className='about-text'>Bhagirati Construction has been delivering top-tier residential and commercial projects for over a decade, ensuring quality, safety, and innovation.</p>
    </section>

    <section className='service-section'>
    <h2 className='service-heading'>Our Services</h2>
    <div className='service-grid'>
      {[
        {title:"Construction Planning", icon: <FaDraftingCompass />},
          {title: "Building & Renovation", icon: <FaHammer />},
          {title: "Structural Engineering", icon: <FaTools />}
      ].map((service,index)=>(
        <div key={index} className='service-card'>
            <div className='service-icon'>{service.icon}</div>
            <div className='service-title'>{service.title}</div>

        </div>
      ))}
    </div>
    </section>

      <section className='contact-section'>
        <h2 className='contact-heading'>Get in Touch</h2>
        <form className='contact-form' onSubmit={handleSubmit}>
              <input type='text' name='name' placeholder='Your Name' className='contact-input' onChange={handleChange} required/>
              <input type='email' name='email' placeholder='Your Email' className='contact-input' onChange={handleChange} required/>
              <textarea  name='message' placeholder='Your Message' rows="4" className='contact-input' onChange={handleChange} required/>
              <button type='submit' className='contact-button'>Send Message</button>
        </form>
        <div className='contact-details'>
          <div className='contact-item'><FaPhone /> +91 98765 43210</div>
          <div className='contact-item'><FaEnvelope/> contact@bhagiraticonstruction.com</div>
          <div className='contact-item'><FaMapMarkerAlt /> Vijayapura, Karnataka</div>
        </div>
      </section>


</div>
    
  )
}

export default Home