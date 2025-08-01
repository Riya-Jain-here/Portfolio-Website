import React, { useCallback } from "react";
import "./Project.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Project = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const projects = [
    {
      title: "Flight Reservation System",
      description:
        "A web application to search, book, and pay for flights with real-time seat tracking. Built using JSP, Servlets, and MySQL with payment integration.",
      stack: ["JSP", "Servlets", "MySQL"],
      github: "https://github.com/Riya-Jain-here/Flight-Reservation-System"
    },

    {
      title: "Library Management System",
      description:
        "A Python desktop app to manage books, users, and borrow records with login authentication. Developed using Tkinter for GUI and MySQL for storage.",
      stack: ["Python (Tkinter)", "MySQL"],
      github: "https://github.com/Riya-Jain-here/Library-Management-System"
    },

    {
      title: "Weather Forecast App",
      description:
        "A simple weather app that shows live weather data based on city input. Built using JSP, Servlets, and external weather APIs.",
      stack: ["JSP", "Servlets"],
      github: "https://github.com/Riya-Jain-here/Weather-Forecast"
    },

    {
      title: "College Addmission Management System",
      description:
        "A platform for handling student admissions, form submissions, and data management. Created with JSP, Servlets, and MySQL for backend logic.",
      stack: ["JSP", "Servlets", "MySQL"],
      github: "https://github.com/Riya-Jain-here/College-Admission-Management-System"
    },

    {
      title: "To-Do App",
      description:
        "A simple task management app to add, update, and delete daily tasks efficiently. Built using Java with a focus on clean logic and user-friendly design.",
      stack: ["Java", "Android"],
      github: "https://github.com/Riya-Jain-here/To-Do-App"
    },
  ];

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
        <h2>Projects</h2>
        <div className="card-items">
        {projects.map((project,index) => (
          <div key={index} className="project-card fade-in">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.stack.join(", ")}
            </p>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
