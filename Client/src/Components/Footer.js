import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>

        <p>&copy; {new Date().getFullYear()} Riya Jain. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Riya-Jain-here" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:riyajain2216@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/riya-jain-27098423a/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

    </footer>
  )
}

export default Footer
