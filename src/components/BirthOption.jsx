import React, { useState } from 'react';
import './BirthOptions.css';
import placeIcon from '../assets/icons/Location.png';
import nameIcon from '../assets/icons/birth.png';
import dateIcon from '../assets/icons/dob.png';

const BirthOptions = () => {
  const [formData, setFormData] = useState({
    placeOfBirth: '',
    birthName: '',
    dateOfBirth: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission here
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('.third-part'); // ID or class of next component
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [animate,
  return (
    <div className="birth-container" id='birth-section'>
      <form className="birth-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h2>Birth Information</h2>
          <p>Enter your details to discover your cosmic journey</p>
        </div>
        
        <div className="options-wrapper">
          <div className={`option ${focusedField === 'place' ? 'focused' : ''}`}>
            <img src={placeIcon} alt="Place of Birth" className="icon" />
            <label htmlFor="placeOfBirth">Place of Birth</label>
            <input
              type="text"
              id="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
              onFocus={() => setFocusedField('place')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your birth city"
              className="birth-input"
            />
          </div>

          <div className={`option ${focusedField === 'name' ? 'focused' : ''}`}>
            <img src={nameIcon} alt="Birth Name" className="icon" />
            <label htmlFor="birthName">Birth Name</label>
            <input
              type="text"
              id="birthName"
              value={formData.birthName}
              onChange={(e) => handleInputChange('birthName', e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your full name"
              className="birth-input"
            />
          </div>

          <div className={`option ${focusedField === 'date' ? 'focused' : ''}`}>
            <img src={dateIcon} alt="Date of Birth" className="icon" />
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              onFocus={() => setFocusedField('date')}
              onBlur={() => setFocusedField(null)}
              className="birth-input date-input"
            />
          </div>
        </div>

        <div className="submit-section">
          <button type="submit" className="submit-btn">
            <span>Discover My Path</span>
            <div className="btn-glow"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BirthOptions;