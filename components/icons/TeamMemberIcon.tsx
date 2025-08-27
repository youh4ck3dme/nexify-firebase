import React from 'react';

const TeamMemberIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="team-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00F5FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF00C7', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="#1D103A" />
    <g stroke="url(#team-grad)" strokeWidth="4" fill="none">
      <circle cx="50" cy="40" r="15" />
      <path d="M 20 85 C 20 65, 80 65, 80 85" strokeLinecap="round" />
    </g>
  </svg>
);

export default TeamMemberIcon;