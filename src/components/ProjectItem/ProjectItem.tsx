import React from 'react'
import './styles.css'

import linkbuttonIcon from "../../assets/svg/link-button.svg"
import githubbuttonIcon from "../../assets/svg/github-button.svg"

export default function ProjectItem() {
  return (
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
  )
}
