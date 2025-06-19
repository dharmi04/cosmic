// ScrollContainer.jsx (or inside your main layout)
import React from 'react';
import './ScrollContainer.css'
const ScrollContainer = ({ children }) => {
  return (
    <div className="fullpage-scroll-container">
      {children}
    </div>
  );
};

export default ScrollContainer;
