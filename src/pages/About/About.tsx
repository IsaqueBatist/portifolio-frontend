import React from 'react'
import './styles.css'

import monkey from "../../assets/image/monkey.png"
import aboutPlant from "../../assets/image/about-plant.png"
import linkedin from "../../assets/svg/linkedin-icon.svg"
import github from "../../assets/svg/github-icon.svg"

export default function About() {
  return (
    <div className="about-container">
      {/* <img src={monkey} alt="monkey" className="monkey" /> */}
      <section className="about-content">
        <div className="content-text-section">
          <h2 className="content-title">About Me</h2>
          <p className="content-text">My name is Isaque Barbosa, I'm a front end developer and ADS student from Brazil. I'm passionate about developing websites, music and I'm always curious to learn more about new technologies and creative coding. I am specializing in React development, I have experience with TypeScript, JavaScript, SASS, etc. You can download my CV <span>here</span>, or find me on social media:</p>
          <div className="socialmedias">
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="technologies">
            <h3 className='techonologies-title'>Technologies and Tools</h3>
            <div className="carousel"></div>
          </div>
        </div>
        <img src={aboutPlant} alt="about plant" />
      </section>
    </div>

  )
}
