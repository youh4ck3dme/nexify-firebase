import React from 'react';

const Portfolio1Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="p1-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00F5FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF00C7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="#1D103A" />
    <g opacity="0.8" transform="translate(25 0)">
      <path d="M 20 20 L 80 20 L 80 80 L 20 80 Z" fill="none" stroke="url(#p1-grad)" strokeWidth="4" />
      <path d="M 50 20 L 50 80" fill="none" stroke="url(#p1-grad)" strokeWidth="2" />
      <path d="M 120 50 A 30 30 0 1 1 60 50" fill="none" stroke="url(#p1-grad)" strokeWidth="4" />
    </g>
  </svg>
);

export default Portfolio1Icon;