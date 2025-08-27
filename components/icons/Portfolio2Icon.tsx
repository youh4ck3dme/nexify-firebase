import React from 'react';

const Portfolio2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="p2-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00F5FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF00C7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="#1D103A" />
    <g opacity="0.7">
      <rect x="20" y="15" width="160" height="70" rx="10" fill="url(#p2-grad)" fillOpacity="0.2" />
      <rect x="20" y="15" width="160" height="70" rx="10" fill="none" stroke="url(#p2-grad)" strokeWidth="3" />
       <circle cx="50" cy="50" r="15" fill="url(#p2-grad)" />
       <rect x="80" y="40" width="80" height="20" rx="5" fill="url(#p2-grad)" fillOpacity="0.5" />
    </g>
  </svg>
);

export default Portfolio2Icon;