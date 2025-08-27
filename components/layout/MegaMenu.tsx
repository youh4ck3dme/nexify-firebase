import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavLink } from '../../types';
import Link from '../../routing/Link';

interface MegaMenuProps {
  isOpen: boolean;
  items: NavLink[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, items }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max"
        >
          <div className="bg-brand-surface rounded-lg shadow-2xl border border-brand-primary/20 p-6 grid grid-cols-2 gap-x-12 gap-y-4">
            {items.map(item => (
              <div key={item.label}>
                <Link href={item.href} className="font-bold text-brand-text hover:text-brand-primary transition-colors">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 space-y-1">
                    {item.children.map(child => (
                      <li key={child.label}>
                        <Link href={child.href} className="text-sm text-brand-text-muted hover:text-brand-primary transition-colors">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;