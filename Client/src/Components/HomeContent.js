import React, { useCallback } from "react";
import "./HomeContent.css";
import resume from "./RIYA JAIN.pdf";
import profilePhoto from "../images/profilephoto2.jpg";
import linkedinIcon from "../images/linkedin_icon.jpg";
import gmailIcon from "../images/gmail_imgg.png";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HomeContent() {
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

      
  <div className="home-content-wrapper">
      <div className="home-image">
        <img src={profilePhoto} alt="My profile" className="profile-img" />
      </div>

      <div className="home-text">
        <h1>Hello, I'm Riya Jain</h1>

        <h2 className="typed-text">
          <Typewriter
            words={[
              "Software Engineer",
              "Full Stack Developer",
              "Software Developer",
              "Tech Enthusiast",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="intro-text">
          MCA graduate and aspiring Software Developer with a strong foundation in full-stack development. I enjoy building real-world solutions, learning continuously, and turning ideas into functional, user-centric applications.
        </p>

        <div className="social-download">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/riya-jain-27098423a"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="linkedin_icon"
              className="social-icon"
            ></img>
          </a>
          
          <a href="mailto:riyajain2216@gmail.com">
            <img src={gmailIcon} alt="gmail_icon" className="social-icon"></img>
          </a>
        </div>

        <a href={resume} download="Riya JAIN" aria-label="Download Resume PDF">
          <button type="button" className="btn btn-success">
            Download Resume
          </button>
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}
