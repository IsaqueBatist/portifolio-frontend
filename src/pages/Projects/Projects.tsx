import React from 'react'
import './styles.css'

import linkbuttonIcon from "../../assets/svg/link-button.svg"
import githubbuttonIcon from "../../assets/svg/github-button.svg"

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
          <div className="project-item">
            <div className="link-imagens">
              <img src={linkbuttonIcon} alt="link" />
              <img src={githubbuttonIcon} alt="github"/>
            </div>
            <div className="project-item-image">
              <img src="https://picsum.photos/200/300" alt="teste " />
            </div>
            <div className="project-item-content">
              <h3>Project Title</h3>
              <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot “</p>
              <div className="project-item-content-skills">
                <div className="project-item-content-skill">
                  Git
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-3d">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/859/837/small_2x/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.png" alt="plant test" width={750} height={750} />
      </div>
    </div>
  )
}
