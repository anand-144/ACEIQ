import React from 'react';
import './CurvedLoop.css';

const CurvedLoop = ({
  marqueeText = 'AceIQ ✦ AceIQ ✦ AceIQ ✦ AceIQ ✦ AceIQ ✦ ',
  speed = 35,
  curveAmount = 600,
  fontSize = 180,
  className = '',
}) => {
  const pathId = 'curvePath';

  return (
    <div className={`curved-loop-jacket ${className}`}>
      <svg
        className="curved-loop-svg"
        viewBox="0 0 4000 150"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id={pathId}
            d={`M 0 75 Q 2000 ${75 - curveAmount / 10} 4000 75`}
            fill="none"
          />
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EC5EC1" />
            <stop offset="100%" stopColor="#B282F4" />
          </linearGradient>
        </defs>

        <text fontSize={fontSize} fill="url(#gradient)">
          <textPath
            href={`#${pathId}`}
            startOffset="0%"
            method="align"
            spacing="auto"
          >
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
            {marqueeText.repeat(6)}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;
