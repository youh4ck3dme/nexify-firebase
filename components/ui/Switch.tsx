import React from 'react';
// FIX: Import Transition type to fix TypeScript error.
import { motion, Transition } from 'framer-motion';

interface SwitchProps {
  id: string;
  checked: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, onToggle }) => {
  // FIX: Explicitly type transition object with Transition to fix TypeScript error.
  const spring: Transition = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <button
      id={id}
      className={`relative flex items-center h-7 w-12 rounded-full cursor-pointer transition-colors duration-300 ${checked ? 'bg-brand-primary' : 'bg-gray-600'}`}
      onClick={onToggle}
      aria-checked={checked}
      role="switch"
    >
      <motion.div
        className="h-5 w-5 bg-white rounded-full absolute"
        style={{ left: checked ? 'calc(100% - 1.5rem)' : '0.25rem' }}
        transition={spring}
        layout
      />
    </button>
  );
};

export default Switch;