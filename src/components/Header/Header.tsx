import React from 'react'
import './styles.css'

export default function Header() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <ul className="navbar-items">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
