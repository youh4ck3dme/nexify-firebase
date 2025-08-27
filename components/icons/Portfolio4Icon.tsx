import React from 'react';

const Portfolio4Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="p4-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00F5FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF00C7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="#1D103A" />
    <g opacity="0.8" stroke="url(#p4-grad)" strokeWidth="2" fill="none">
       <path d="M 50 10 L 150 10 L 150 90 L 50 90 Z" />
       <path d="M 50 10 L 100 50 L 50 90" />
       <path d="M 150 10 L 100 50 L 150 90" />
       <path d="M 75 10 L 125 10" />
       <path d="M 75 90 L 125 90" />
       <circle cx="100" cy="50" r="10" fill="url(#p4-grad)" stroke="none" />
    </g>
  </svg>
);

export default Portfolio4Icon;