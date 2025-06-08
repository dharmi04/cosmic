import React, { useEffect, useRef } from 'react';
import './FlowTextAnimation.css';

const FlowingTextAnimation = () => {
  const astroTextRef = useRef(null);
  const mindBodyTextRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (!window.gsap) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = initializeAnimation;
        document.head.appendChild(script);
      } else {
        initializeAnimation();
      }
    };

    const initializeAnimation = () => {
      const gsap = window.gsap;
            gsap.set(astroTextRef.current, { x: -200 });
      gsap.to(astroTextRef.current, {
        x: window.innerWidth + 200,
        duration: 8,
        ease: "none",
        repeat: -1,
        repeatDelay: 0
      });
      gsap.set(mindBodyTextRef.current, { x: window.innerWidth + 200 });
      gsap.to(mindBodyTextRef.current, {
        x: -250,
        duration: 8,
        ease: "none",
        repeat: -1,
        repeatDelay: 0
      });
    };

    loadGSAP();

    const handleResize = () => {
      if (window.gsap) {
        window.gsap.killTweensOf([astroTextRef.current, mindBodyTextRef.current]);
        initializeAnimation();
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.gsap) {
        window.gsap.killTweensOf([astroTextRef.current, mindBodyTextRef.current]);
      }
    };
  }, []);

  return (
    <div className="container">
      <div 
        ref={astroTextRef}
        className="flowing-text astro-text"
      >
        Astro Wisdom
      </div>

      <div 
        ref={mindBodyTextRef}
        className="flowing-text mind-body-text"
      >
        Mind-Body Flow
      </div>
    </div>
  );
};

export default FlowingTextAnimation;