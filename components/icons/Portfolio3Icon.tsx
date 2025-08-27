import React from 'react';

const Portfolio3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="p3-grad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00F5FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF00C7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="#1D103A" />
    <g opacity="0.8" stroke="url(#p3-grad)" strokeWidth="3" fill="none">
      <path d="M 10 90 C 40 10, 60 10, 90 90" />
      <path d="M 60 90 C 90 10, 110 10, 140 90" />
      <path d="M 110 90 C 140 10, 160 10, 190 90" />
    </g>
  </svg>
);

export default Portfolio3Icon;