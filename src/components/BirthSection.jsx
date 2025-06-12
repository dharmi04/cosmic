import React from 'react'
import './BirthSection.css'
import logo from '../assets/logo.png'
const BirthSection = () => {
  return (
    <div className='birthsection'>
       <div className="banner">
      <div className="banner-overlay">
        <div className="banner-top">
          <img src={logo} alt="logo" className="logo" />
          <button className="self-care-btn">SELF-CARE</button>
          <button className="aiyuh-btn">AIYUH ↗</button>
        </div>
        <div className="banner-content">
          <p>Your birth determines exact positions of celestial bodies and<br />your physiological features!</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BirthSection
