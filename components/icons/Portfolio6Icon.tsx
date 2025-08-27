import React from 'react';

const Portfolio6Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="p6-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F5FF" />
        <stop offset="100%" stopColor="#FF00C7" />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="#1D103A" />
    <g opacity="0.8" fill="none" stroke="url(#p6-grad)" strokeWidth="3">
        <rect x="70" y="10" width="60" height="80" rx="10" />
        <circle cx="100" cy="80" r="4" fill="url(#p6-grad)" stroke="none" />
        <path d="M 80 20 L 120 20" strokeWidth="2" />
    </g>
  </svg>
);

export default Portfolio6Icon;