import React from 'react';
import './BirthOptions.css';
import placeIcon from '../assets/icons/location.png';
import nameIcon from '../assets/icons/birth.png';
import dateIcon from '../assets/icons/dob.png';

const BirthOptions = () => {
  return (
    <div className="birth-container">
      <div className="options-wrapper">
        <div className="option">
          <img src={placeIcon} alt="Place of Birth" className="icon" />
          <p>Place of Birth</p>
        </div>
        <div className="option">
          <img src={nameIcon} alt="Birth Name" className="icon" />
          <p>Birth Name</p>
        </div>
        <div className="option">
          <img src={dateIcon} alt="Date of Birth" className="icon" />
          <p>Date of Birth</p>
        </div>
      </div>
    </div>
  );
};

export default BirthOptions;
