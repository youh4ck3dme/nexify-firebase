
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../../config/site';
import { useTrapFocus } from '../../hooks/useTrapFocus';
import MobileSubMenu from './MobileSubMenu';
import Link from '../../routing/Link';
import type { NavLink } from '../../types';


const CTAButton: React.FC<{ link: NavLink; onClick: () => void; }> = ({ link, onClick }) => {
    const baseClasses = "block w-full text-center px-5 py-3 font-bold rounded-full transition-all duration-300";
    const variantClasses = {
        primary: "bg-brand-primary text-brand-bg",
        secondary: "bg-brand-surface text-brand-text",
    };

    return (
        <Link href={link.href} onClick={onClick} className={`${baseClasses} ${variantClasses[link.variant ?? 'secondary']}`}>
            {link.label}
        </Link>
    );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useTrapFocus<HTMLDivElement>(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          ref={menuRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden fixed inset-0 z-40 bg-brand-bg/80 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
         <div className="absolute top-24 left-4 right-4 bg-brand-surface rounded-lg p-4 border border-brand-primary/20 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {SITE_CONFIG.PRIMARY_NAV.map((link) => (
              <MobileSubMenu key={link.label} item={link} closeMainMenu={onClose} />
            ))}
            <div className="pt-4 mt-4 border-t border-brand-primary/10 space-y-3">
                {SITE_CONFIG.CTA_NAV.map(link => (
                    <CTAButton key={link.label} link={link} onClick={onClose} />
                ))}
            </div>
          </nav>
         </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;