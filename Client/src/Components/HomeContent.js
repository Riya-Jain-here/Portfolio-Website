import React from 'react'
import './HomeContent.css';

export default function HomeContent() {
  return (
    <>
    <div className='container-item'>
      <img src={require('../images/profilephoto2.jpg')} alt='My Image'  className="App-imgg"/ >
      </div>
    <div className="format-content">
      <p>
        Hello,
      </p>
      <h1>I'm Riya Jain</h1>
      <h5>from Delhi.</h5>
      <br></br>
      <p>
        Enthusiastic and detail-oriented MCA student with strong<br></br>foundation in programming.
      </p>
      <p>
      <br></br>
      <a href="https://www.linkedin.com/in/riya-jain-27098423a" target="_blank" rel="noreferrer">
      <img src={require('../images/linkedin_icon.jpg')} alt='linkedin_icon'  className="linkedin_imgg"></img>
      </a>
      &nbsp;&nbsp;
     

      <a href='mailto:riyajain2216@gmail.com'>
      <img src={require('../images/gmail_imgg.png')} alt='gmail_icon'  className="gmail_imgg"></img>
      </a>

      </p>
      
      <a href={require("./Riya_resume.pdf")} download="Riya_Resume">
      <button type="button" className="btn btn-success" target="_blank">Download Resume</button>
      </a>
   
    </div>
    </>
  )
}