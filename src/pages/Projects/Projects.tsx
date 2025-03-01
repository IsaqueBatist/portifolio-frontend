import React from 'react'
import './styles.css'
import ProjectItem from '../../components/ProjectItem/ProjectItem.tsx'
import ThreeDScene from '../../components/ThreeDScene/ThreeDScene.tsx'


export default function Projects() {
  return (
    <div className="projects-container">
      <div className="content">
        <div className="content-header">
          <h2 className="content-projects-title">
            Projects
          </h2>
          <p className="content-projects-subtitle">
            Projects I have worked on or am currently working on.
          </p>
        </div>
        <div className="projects-list">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
      <div className="image-3d">
        <ThreeDScene />
      </div>
    </div>
  )
}
