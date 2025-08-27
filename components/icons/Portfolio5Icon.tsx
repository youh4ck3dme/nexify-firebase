import React from 'react';

const Portfolio5Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
        <radialGradient id="p5-grad">
            <stop offset="0%" stopColor="#00F5FF" />
            <stop offset="100%" stopColor="#FF00C7" />
        </radialGradient>
    </defs>
    <rect width="200" height="100" fill="#1D103A" />
    <g opacity="0.8">
        <circle cx="100" cy="50" r="40" stroke="url(#p5-grad)" strokeWidth="2" fill="none" />
        <ellipse cx="100" cy="50" rx="40" ry="15" stroke="url(#p5-grad)" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="50" rx="40" ry="15" transform="rotate(90 100 50)" stroke="url(#p5-grad)" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="50" rx="40" ry="15" transform="rotate(45 100 50)" stroke="url(#p5-grad)" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="50" rx="40" ry="15" transform="rotate(-45 100 50)" stroke="url(#p5-grad)" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

export default Portfolio5Icon;