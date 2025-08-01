import React, { useRef } from 'react'
import { useCallback } from "react";
import './Contact.css'
import { useState } from 'react' 
import axios from 'axios'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Contact() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
const n=useRef("");
const em=useRef("");
const m=useRef("");
const [feedback, setFeedback] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/Contact', { name, email, message })
      .then(result => {
        console.log(result);

        setFeedback("Message sent successfully!");

        n.current.value = "";
        em.current.value = "";
        m.current.value = "";

        setTimeout(() => setFeedback(""), 3000);
      })
      .catch(err => {
        console.log(err);

        setFeedback("Something went wrong. Please try again.");
        setTimeout(() => setFeedback(""), 3000);
      });
  }

const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="home-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "#000" },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#64CCC5" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
        }}
     />

  <div className='contact-wrapper'>
    <div className='profile-item'>
      <img src={require('../images/profilephoto2.jpg')} alt='My profile'  className="profile-img"/>
      </div>
  
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <br></br>
        <input type='text' placeholder='Enter your name' name='name' ref={n}
        onChange={(e)=>setName(e.target.value)}></input><br/><br/>
         
        <label htmlFor='email'>Email</label>
        <br></br>
        <input type='email' placeholder='name@example.com' name='email' ref={em}
        onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>
        
        <label htmlFor='message'>Message</label>
        <br></br>
        <textarea type='text' placeholder='write your query here' name='message' ref={m}
        onChange={(e)=>setMessage(e.target.value)}></textarea><br/>
        
        <button type='submit'>Submit</button>
      </form>
      {feedback && (
            <p style={{ marginTop: '10px', color: '#64CCC5', fontWeight: '500' }}>
              {feedback}
            </p>
          )}
    </div>
    </div>
    </div>   
  );
}

export default Contact
