import React from 'react';
// FIX: Import Variants type to fix TypeScript error.
import { motion, Variants } from 'framer-motion';
import { useSettings } from '../../hooks/useSettings';
import AnimatedSection from '../ui/AnimatedSection';

const data = [
  { name: 'Jan', animations: 80, interactions: 48 }, // values as percentages
  { name: 'Feb', animations: 60, interactions: 28 },
  { name: 'Mar', animations: 40, interactions: 98 },
  { name: 'Apr', animations: 55, interactions: 78 },
  { name: 'May', animations: 38, interactions: 96 },
  { name: 'Jun', animations: 48, interactions: 76 },
];

const Bar: React.FC<{ value: number; color: string; }> = ({ value, color }) => {
  const { settings } = useSettings();
  // FIX: Explicitly type variants with Variants and use 'as const' for the cubic-bezier
  // ease array to ensure it's inferred as a tuple, not number[], fixing the type error.
  const barVariants: Variants = {
    hidden: { height: '0%' },
    visible: { height: `${value}%`, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as const, delay: 0.2 } },
  };

  return (
    <div className="relative w-full h-full bg-brand-surface/50 flex items-end rounded-t-md overflow-hidden">
      <motion.div
        className={`w-full`}
        style={{ backgroundColor: color }}
        variants={settings.animations ? barVariants : {}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      />
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <AnimatedSection id="projects" className="bg-brand-surface/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Project <span className="text-brand-secondary">Analytics</span>
      </h2>
      <div className="w-full h-96 p-6 bg-brand-surface rounded-lg border border-brand-primary/20 shadow-lg flex items-end justify-around gap-4 md:gap-6">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center h-full flex-1">
            <div className="flex items-end h-full w-full gap-1.5">
              <Bar value={item.animations} color="#00F5FF" />
              <Bar value={item.interactions} color="#FF00C7" />
            </div>
            <span className="text-sm font-semibold text-brand-text-muted mt-3">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-[#00F5FF] mr-2"></div>
          <span className="text-brand-text-muted">Animations</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-[#FF00C7] mr-2"></div>
          <span className="text-brand-text-muted">Interactions</span>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;