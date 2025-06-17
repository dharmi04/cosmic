import React from 'react';
import './VImageTrail.css';
import { motion } from 'framer-motion';
import ball from '../assets/middle-image.png'; // your center orb image

// Left images
import left1 from '../assets/Left/image 996.png';
import left2 from '../assets/Left/image 997.png';
import left3 from '../assets/Left/image 998.png';
import left4 from '../assets/Left/image 999.png';
import left5 from '../assets/Left/image 1000.png';
import left6 from '../assets/Left/image 1001.png';
import left7 from '../assets/Left/image 1002.png';
import left8 from '../assets/Left/image 1006.png';
import left9 from '../assets/Left/image 1007.png';

// Right images
import right1 from '../assets/Right/1-4.png';
import right2 from '../assets/Right/image 1008.png';
import right3 from '../assets/Right/image 1009.png';
import right4 from '../assets/Right/image 1010.png';
import right5 from '../assets/Right/image 1011.png';
import right6 from '../assets/Right/image 1018.png';
import right7 from '../assets/Right/image 1013.png';
import right8 from '../assets/Right/image 1014.png';
import right9 from '../assets/Right/image 1016.png';

const leftImages = [left1, left2, left3, left4, left5, left6, left7, left8, left9];
const rightImages = [right1, right2, right3, right4, right5, right7, right6, right8, right9];

const VImageTrail = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="v-container">
      {leftImages.map((src, i) => {
        const top = isMobile ? `${5 + i * 2.5}%` : `${9 + i * 3}%`;
        const left = isMobile ? `${6 + i * 2.9}%` : `${8 + i * 3}%`;
        const rotate = isMobile ? -8 : -12;

        return (
          <motion.img
            key={`left-${i}`}
            src={src}
            className="trail-image left"
            style={{
              top,
              left,
              transform: `rotate(${rotate}deg)`,
              zIndex: leftImages.length - i,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
          />
        );
      })}

      {rightImages.map((src, i) => {
        const top = isMobile ? `${5 + i * 2.5}%` : `${9 + i * 3}%`;
        const right = isMobile ? `${6 + i * 2.9}%` : `${8 + i * 3.5}%`;
        const rotate = isMobile ? 8 : 12;

        return (
          <motion.img
            key={`right-${i}`}
            src={src}
            className="trail-image right"
            style={{
              top,
              right,
              transform: `rotate(${rotate}deg)`,
              zIndex: rightImages.length - i,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
          />
        );
      })}

      <img src={ball} className="center-ball" alt="orb" />
    </div>
  );
};

export default VImageTrail;
