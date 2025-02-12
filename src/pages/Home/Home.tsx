import React from 'react'

import "./styles.css"
import homePlant from "../../assets/image/home-plant.png"
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon.tsx'

export default function Home() {
  return (
    <div className="home-container">
      <main>
      <section className="text-section">
        <div className="text-section-title">
          <h1>Hi I'm <span>Isaque</span>, <br />Web Developer</h1>
        </div>
        <div className="text-section-subtitle">Currently I am a student and developer, my focus is web development with React TS</div>
      </section>
      <img src={homePlant} alt="home plant" className="home-image"/>
      </main>
      <ScrollIcon />
    </div>
  )
}
