
import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import toast from 'react-hot-toast';
import { useSettings } from '../hooks/useSettings';
import Switch from './ui/Switch';
import type { Settings } from '../types';
import { useTrapFocus } from '../hooks/useTrapFocus';
import XIcon from './icons/XIcon';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { settings, toggleSetting } = useSettings();
  const panelRef = useTrapFocus<HTMLDivElement>(isOpen);

  const handleToggle = (key: keyof Settings, label: string) => {
    toggleSetting(key);
    toast(`${label} ${!settings[key] ? 'Enabled' : 'Disabled'}`);
  };
  
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  const panelVariants: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Settings panel"
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            variants={backdropVariants}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            className="absolute top-0 right-0 h-full w-full max-w-sm bg-brand-surface p-6 shadow-2xl flex flex-col border-l border-brand-primary/20"
            variants={panelVariants}
            exit="exit"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-brand-text">Settings</h2>
              <motion.button 
                onClick={onClose} 
                className="p-2 text-brand-text-muted hover:text-brand-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close settings"
              >
                <XIcon />
              </motion.button>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label htmlFor="animations" className="text-brand-text">Enable Animations</label>
                <Switch 
                  id="animations"
                  checked={settings.animations} 
                  onToggle={() => handleToggle('animations', 'Animations')} 
                />
              </div>
               <div className="flex justify-between items-center">
                <label htmlFor="background3d" className="text-brand-text">Enable 3D Background</label>
                <Switch 
                  id="background3d"
                  checked={settings.background3d} 
                  onToggle={() => handleToggle('background3d', '3D Background')} 
                />
              </div>
               <div className="flex justify-between items-center">
                <label htmlFor="parallax" className="text-brand-text">Enable Parallax Effects</label>
                <Switch 
                  id="parallax"
                  checked={settings.parallax} 
                  onToggle={() => handleToggle('parallax', 'Parallax')} 
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;