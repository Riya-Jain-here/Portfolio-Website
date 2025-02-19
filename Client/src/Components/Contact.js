import React, { useRef } from 'react'
import Header from './Header'
import './Contact.css'
import HomeContent from './HomeContent'
//import About from './About'
import Certificates from './Certificates'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react' 
import axios from 'axios'

function Contact() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
const n=useRef("");
const em=useRef("");
const m=useRef("");

const handleSubmit=(e)=>{
e.preventDefault();
axios.post('http://localhost:3001/Contact',{name,email,message})
.then(result=>console.log(result))
.catch(err=>console.log(err))
n.current.value ="";
em.current.value="";
m.current.value="";
}

  return (
    <>
    <div className='container-item'>
      <img src={require('../images/profilephoto2.jpg')} alt='My Image'  className="App-imgg"/ >
      </div>
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='/HomeContent' element={<HomeContent/>}></Route>
     {/* <Route path='/About' element={<About/>}></Route>*/}
      <Route path='/Certificates' element={<Certificates/>}></Route>
    </Routes>
    
    
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
    </div>
    </>
  )
}

export default Contact
