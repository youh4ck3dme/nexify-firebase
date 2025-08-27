
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { SITE_CONFIG } from '../../config/site';
import { useSettings } from '../../hooks/useSettings';
import { useRouter } from '../../routing/useRouter';
import SettingsPanel from '../SettingsPanel';
import Link from '../../routing/Link';
import MobileMenu from './MobileMenu';
import MenuIcon from '../icons/MenuIcon';
import XIcon from '../icons/XIcon';
import SettingsIcon from '../icons/SettingsIcon';
import MegaMenu from './MegaMenu';
import type { NavLink as NavLinkType } from '../../types';

const NavLink: React.FC<{ link: NavLinkType }> = ({ link }) => {
  const { settings } = useSettings();
  const { path } = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const isPageLink = !link.href.includes('/#');
  const linkPath = link.href.substring(1);
  const isActive = isPageLink && path === linkPath;

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="relative"
      whileHover={settings.animations ? { y: -2 } : {}}
    >
      <Link
        href={link.href}
        className={`transition-colors duration-300 ${
          isActive ? 'text-brand-primary' : 'text-brand-text-muted hover:text-brand-primary'
        }`}
      >
        {link.label}
      </Link>
      {link.children && (
        <MegaMenu isOpen={isHovering} items={link.children} />
      )}
    </motion.div>
  );
};


const CTAButton: React.FC<{ link: NavLinkType }> = ({ link }) => {
    const { settings } = useSettings();
    const baseClasses = "px-5 py-2 font-bold rounded-full transition-all duration-300";
    const variantClasses = {
        primary: "bg-brand-primary text-brand-bg",
        secondary: "bg-transparent border-2 border-brand-text-muted text-brand-text-muted hover:text-brand-text hover:border-brand-text",
    };
    const hoverEffect = {
      primary: { scale: 1.05, boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' },
      secondary: { scale: 1.05 },
    };

    return (
        <motion.div
            whileHover={settings.animations ? hoverEffect[link.variant ?? 'secondary'] : {}}
            whileTap={settings.animations ? { scale: 0.95 } : {}}
        >
            <Link href={link.href} className={`${baseClasses} ${variantClasses[link.variant ?? 'secondary']}`}>
                {link.label}
            </Link>
        </motion.div>
    );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { settings } = useSettings();
  
  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <motion.header
        variants={settings.animations ? headerVariants : {}}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-brand-bg/80 backdrop-blur-lg border-b border-brand-surface"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div whileHover={settings.animations ? { scale: 1.05 } : {}}>
            <Link
              href="#/"
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text"
            >
              NEXIFY
            </Link>
          </motion.div>
          <nav className="hidden lg:flex items-center space-x-8">
            {SITE_CONFIG.PRIMARY_NAV.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
             <div className="hidden md:flex items-center space-x-4">
                {SITE_CONFIG.CTA_NAV.map(link => <CTAButton key={link.label} link={link} />)}
            </div>
            <motion.button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 text-brand-text-muted hover:text-brand-primary transition-colors duration-300"
              whileHover={settings.animations ? { scale: 1.1, rotate: 15 } : {}}
              whileTap={settings.animations ? { scale: 0.9 } : {}}
              aria-label="Open settings"
            >
              <SettingsIcon />
            </motion.button>
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-brand-text-muted hover:text-brand-primary"
                whileTap={settings.animations ? { scale: 0.9 } : {}}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default Header;