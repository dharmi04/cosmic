import React, { useEffect, useRef, useState } from 'react';

const MouseLightEffect = () => {
  const lightRef = useRef(null);
  const trailRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Smooth interpolation animation
    const animate = () => {
      // Lerp (linear interpolation) for smooth movement
      const lerp = (start, end, factor) => start + (end - start) * factor;
      
      mousePos.current.x = lerp(mousePos.current.x, targetPos.current.x, 0.1);
      mousePos.current.y = lerp(mousePos.current.y, targetPos.current.y, 0.1);

      // Update main light position
      if (lightRef.current) {
        lightRef.current.style.left = `${mousePos.current.x}px`;
        lightRef.current.style.top = `${mousePos.current.y}px`;
      }

      // Update trail
      trailRef.current.push({ 
        x: mousePos.current.x, 
        y: mousePos.current.y, 
        opacity: 1,
        id: Date.now() + Math.random()
      });

      // Keep only last 10 trail points
      if (trailRef.current.length > 10) {
        trailRef.current.shift();
      }

      // Update trail elements
      const trailElements = document.querySelectorAll('.mouse-trail-dot');
      trailElements.forEach((element, index) => {
        const trailPoint = trailRef.current[index];
        if (trailPoint) {
          element.style.left = `${trailPoint.x}px`;
          element.style.top = `${trailPoint.y}px`;
          element.style.opacity = (index / trailRef.current.length) * 0.6;
          element.style.transform = `translate(-50%, -50%) scale(${(index / trailRef.current.length) * 0.8 + 0.2})`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main glowing orb */}
      <div
        ref={lightRef}
        className="mouse-light-orb"
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 188, 212, 0.8) 0%, rgba(0, 188, 212, 0.4) 30%, rgba(0, 188, 212, 0.1) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          boxShadow: `
            0 0 20px rgba(0, 188, 212, 0.6),
            0 0 40px rgba(0, 188, 212, 0.4),
            0 0 60px rgba(0, 188, 212, 0.2)
          `,
          filter: 'blur(0.5px)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Light trail dots */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="mouse-trail-dot"
          style={{
            position: 'fixed',
            width: `${15 - i * 1}px`,
            height: `${15 - i * 1}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, 
              rgba(0, 188, 212, ${0.6 - i * 0.05}) 0%, 
              rgba(0, 188, 212, ${0.3 - i * 0.03}) 50%, 
              transparent 100%)`,
            pointerEvents: 'none',
            zIndex: 9998 - i,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${20 - i * 2}px rgba(0, 188, 212, ${0.4 - i * 0.03})`,
            mixBlendMode: 'screen'
          }}
        />
      ))}

      {/* Global light overlay */}
      <div
        className="mouse-light-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9997,
          background: `radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 188, 212, 0.02) 0%,
            rgba(0, 188, 212, 0.01) 30%,
            transparent 60%
          )`,
          mixBlendMode: 'screen'
        }}
      />

      <style jsx>{`
        .mouse-light-orb {
          transition: transform 0.1s ease-out;
        }
        
        .mouse-trail-dot {
          transition: opacity 0.3s ease-out, transform 0.2s ease-out;
        }

        /* Update CSS custom properties for the overlay */
        :root {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
      `}</style>
      
      {/* Script to update CSS variables */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            document.documentElement.style.setProperty('--mouse-x', x + '%');
            document.documentElement.style.setProperty('--mouse-y', y + '%');
          });
        `
      }} />
    </>
  );
};

export default MouseLightEffect;