import React, { useCallback } from "react";
import "./About.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="container">
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
      <div className="items-container">
        <h2 className="fade-in">About Me</h2>
        <p className="fade-in">
          {" "}
          I'm <strong>Riya Jain</strong>, an MCA graduate passionate about
          building scalable full-stack applications and solving real-world
          problems through code. I have hands-on experience in backend
          development, modern frontend frameworks, and database management. I
          enjoy learning new technologies and contributing to impactful
          projects.
        </p>

        <p className="fade-in">
          My core skill set includes <strong>Java</strong>,{" "}
          <strong>Python</strong>, <strong>C</strong>, <strong>React.js</strong>
          , <strong>Node.js</strong>, <strong>Django</strong>,{" "}
          <strong>JSP</strong>, <strong>Servlets</strong>,{" "}
          <strong>Spring Boot</strong>, and <strong>MySQL</strong>. I’m also
          familiar with tools like Git, Postman, Android Studio, and Power BI.
          Whether it's developing intuitive web interfaces or working on
          efficient database integration, I enjoy turning ideas into working
          applications.
        </p>

        <p className="fade-in">
          I’m currently seeking full-time roles or internships as a Full Stack
          Developer or Software Engineer, where I can contribute to impactful
          projects, continue learning, and grow professionally. I'm particularly
          excited by opportunities that challenge me to think critically and
          push technical boundaries.
        </p>
      </div>
    </div>
  );
};

export default About;
