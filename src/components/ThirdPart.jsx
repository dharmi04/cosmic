import React from 'react'
import './ThirdPart.css'

import logo from '../assets/logo.png'
const ThirdPart = () => {
  return (
    <div>
      <div className="birth-section">
      <div className="top-bar">
        <img src={logo} alt="logo" className="logo" />
        <a href="#" className="aiyuh-btn">AIYUH ↗</a>
      </div>

      <div className={`self-care-button`}>
        SELF-CARE
      </div>

      <p className="main-text ">
     Your journey is defined by the actions you take.
      </p>
    </div>
    </div>
  )
}

export default ThirdPart
