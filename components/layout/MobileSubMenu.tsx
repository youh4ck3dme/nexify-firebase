import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavLink } from '../../types';
import Link from '../../routing/Link';
import { useRouter } from '../../routing/useRouter';

interface MobileSubMenuProps {
  item: NavLink;
  closeMainMenu: () => void;
}

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ item, closeMainMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { path } = useRouter();

  const isPageLink = !item.href.includes('/#');
  const linkPath = item.href.substring(1);
  const isActive = isPageLink && path === linkPath;
  
  const hasChildren = item.children && item.children.length > 0;

  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      closeMainMenu();
    }
  };
  
  return (
    <div>
      <Link
        href={item.href}
        onClick={handleLinkClick}
        className={`flex justify-between items-center w-full p-2 text-left rounded-md transition-colors duration-300 ${
            isActive ? 'text-brand-primary bg-brand-primary/10' : 'text-brand-text hover:text-brand-primary'
        }`}
      >
        <span>{item.label}</span>
        {hasChildren && (
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            className="text-xs"
          >
            ▶
          </motion.span>
        )}
      </Link>
      
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pt-2 space-y-1 border-l-2 border-brand-primary/20 ml-2">
              {item.children?.map(child => (
                <MobileSubMenu key={child.label} item={child} closeMainMenu={closeMainMenu} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSubMenu;