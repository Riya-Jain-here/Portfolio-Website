import React, { useCallback } from "react";
import "./Certificates.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Certificates = () => {
  const certificates = [
    {
      name: "Python Programming Training",
      issuer: "Allsoft Solutions and Services",
      link: require("./Python_Internship_Certificate.pdf"),
    },
    {
      name: "Android App Development using Java",
      issuer: "Udemy",
      link: require("./Android_App_Development.pdf"),
    },

    {
      name: "SQL Basics",
      issuer: "HackerRank",
      link: require("./sql_certificate_HackerRank.pdf"),
    },
    {
      name: "Deloitte Data Analytics Job Simulation",
      issuer: "Forage (Deloitte)",
      link: require("./Delloite_Data_Analytics_Certificate.pdf"),
    },
  ];

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
        <h2>Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card fade-in">
              <h4>{cert.name}</h4>
              <p>
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <a href={cert.link} target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
