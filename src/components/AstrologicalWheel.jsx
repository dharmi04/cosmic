import React, { useState } from 'react';
import './AstrologicalWheel.css';

// Zodiac images
import aries from '../assets/zodiac/Frame.png';
import taurus from '../assets/zodiac/Frame-1.png';
import gemini from '../assets/zodiac/Frame-2.png';
import cancer from '../assets/zodiac/Frame-3.png';
import leo from '../assets/zodiac/Frame-4.png';
import virgo from '../assets/zodiac/Frame-5.png';
import libra from '../assets/zodiac/Frame-6.png';
import scorpio from '../assets/zodiac/Frame-7.png';
import sagittarius from '../assets/zodiac/Frame-8.png';
import capricorn from '../assets/zodiac/Frame-9.png';
import aquarius from '../assets/zodiac/Frame-10.png';
import pisces from '../assets/zodiac/Frame-11.png';

// Planet images
import sun from '../assets/planets/aquarius.png';
import moon from '../assets/planets/cancer.png';
import mercury from '../assets/planets/capricorn.png';
import venus from '../assets/planets/Frame-1.png';
import mars from '../assets/planets/Frame-2.png';
import jupiter from '../assets/planets/Frame.png';
import saturn from '../assets/planets/gemini.png';
import uranus from '../assets/planets/leo.png';
import neptune from '../assets/planets/libra.png';
import pluto from '../assets/planets/sagittarius.png';
import centerImage from '../assets/planets/virgo.png';

const zodiacSigns = [
  { name: 'Aries', image: aries, angle: 0 },
  { name: 'Taurus', image: taurus, angle: 30 },
  { name: 'Gemini', image: gemini, angle: 60 },
  { name: 'Cancer', image: cancer, angle: 90 },
  { name: 'Leo', image: leo, angle: 120 },
  { name: 'Virgo', image: virgo, angle: 150 },
  { name: 'Libra', image: libra, angle: 180 },
  { name: 'Scorpio', image: scorpio, angle: 210 },
  { name: 'Sagittarius', image: sagittarius, angle: 240 },
  { name: 'Capricorn', image: capricorn, angle: 270 },
  { name: 'Aquarius', image: aquarius, angle: 300 },
  { name: 'Pisces', image: pisces, angle: 330 }
];

const planets = [
  { name: 'Sun', image: sun, angle: 45, distance: 240, active: true },
  { name: 'Moon', image: moon, angle: 120, distance: 220, active: true },
  { name: 'Mercury', image: mercury, angle: 60, distance: 200, active: true },
  { name: 'Venus', image: venus, angle: 30, distance: 210, active: true },
  { name: 'Mars', image: mars, angle: 200, distance: 230, active: false },
  { name: 'Jupiter', image: jupiter, angle: 300, distance: 250, active: false },
  { name: 'Saturn', image: saturn, angle: 270, distance: 190, active: false },
  { name: 'Uranus', image: uranus, angle: 150, distance: 180, active: false },
  { name: 'Neptune', image: neptune, angle: 330, distance: 240, active: false },
  { name: 'Pluto', image: pluto, angle: 180, distance: 170, active: false }
];

const AstrologicalWheel = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const getPosition = (angle, distance) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * distance,
      y: Math.sin(radian) * distance
    };
  };

  return (
    <div className="astro-wheel-container">
      <div className="wheel-wrapper">
        <svg width="600" height="600" viewBox="0 0 600 600" className="astro-wheel">
          {/* Circles */}
          <circle cx="300" cy="300" r="280" className="outer-circle" />
          <circle cx="300" cy="300" r="220" className="zodiac-ring" />
          <circle cx="300" cy="300" r="160" className="inner-circle" />

          {/* Spokes */}
          {zodiacSigns.map(sign => {
            const rad = (sign.angle * Math.PI) / 180;
            const x = 300 + Math.cos(rad) * 280;
            const y = 300 + Math.sin(rad) * 280;
            return (
              <line
                key={`line-${sign.name}`}
                x1="300"
                y1="300"
                x2={x}
                y2={y}
                stroke="#aaa"
                strokeWidth="1"
              />
            );
          })}

          {/* Zodiac signs (static) */}
          {zodiacSigns.map(sign => {
            const pos = getPosition(sign.angle + 15, 250);
            return (
              <image
                key={sign.name}
                href={sign.image}
                x={300 + pos.x - 15}
                y={300 - pos.y - 15}
                width="30"
                height="30"
              />
            );
          })}

          {/* Planets (now static too) */}
          {planets.map(planet => {
            const pos = getPosition(planet.angle, planet.distance);
            const isHovered = hoveredPlanet === planet.name;

            return (
              <image
                key={planet.name}
                href={planet.image}
                x={300 + pos.x - 12}
                y={300 - pos.y - 12}
                width="24"
                height="24"
                className={`planet-img ${planet.active ? 'active' : 'inactive'} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredPlanet(planet.name)}
                onMouseLeave={() => setHoveredPlanet(null)}
              />
            );
          })}

          {/* Center image */}
          <image
            href={centerImage}
            x={300 - 40}
            y={300 - 40}
            width="80"
            height="80"
          />
        </svg>

        {hoveredPlanet && (
          <div className="planet-tooltip">
            <h3>{hoveredPlanet}</h3>
            <p>Click to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologicalWheel;
