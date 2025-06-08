import React, { useEffect, useState } from 'react';

const ScrollAnimatedCircle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const leftCircleStyle = {
    position: 'fixed',
    bottom: 0,
    left: '50vw',
    transform: `
      translateX(calc(-50% - ${30 * scrollProgress}vw))
      translateY(calc(-${150 * scrollProgress}px))
      scale(${1 - 0.2 * scrollProgress})
    `,
    transition: 'transform 0.1s ease-out',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#8e44ad',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    pointerEvents: 'none',
  };

  const rightCircleStyle = {
    position: 'fixed',
    bottom: 0,
    left: '50vw',
    transform: `
      translateX(calc(-50% + ${30 * scrollProgress}vw))
      translateY(calc(-${150 * scrollProgress}px))
      scale(${1 - 0.2 * scrollProgress})
    `,
    transition: 'transform 0.1s ease-out',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#2980b9',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    pointerEvents: 'none',
  };

  return (
    <>
      <div style={leftCircleStyle}>Astro Wisdom</div>
      <div style={rightCircleStyle}>Mind-Body Flow</div>
      {/* Add some tall content to enable scrolling */}
      <div style={{height: '200vh'}}></div>
    </>
  );
};

export default ScrollAnimatedCircle;
