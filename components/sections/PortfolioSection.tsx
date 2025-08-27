import React from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '../../hooks/useSettings';
import AnimatedSection from '../ui/AnimatedSection';
import Portfolio1Icon from '../icons/Portfolio1Icon';
import Portfolio2Icon from '../icons/Portfolio2Icon';
import Portfolio3Icon from '../icons/Portfolio3Icon';
import Portfolio4Icon from '../icons/Portfolio4Icon';
import Portfolio5Icon from '../icons/Portfolio5Icon';
import Portfolio6Icon from '../icons/Portfolio6Icon';

const portfolioItems = [
  { title: 'Nexify Apps', category: 'PWA & TV aplikácie', Icon: Portfolio1Icon },
  { title: 'Nexify SEO', category: 'Profi SEO & Audity', Icon: Portfolio2Icon },
  { title: 'Nexify Design', category: 'Web/UI/UX & Identita', Icon: Portfolio3Icon },
  { title: 'Nexify Commerce', category: 'E-shopy & Automatizácia', Icon: Portfolio4Icon },
  { title: 'Nexify Cards', category: 'NFC & Microsites', Icon: Portfolio5Icon },
  { title: 'Nexify Labs', category: 'R&D & AI Nástroje', Icon: Portfolio6Icon },
];

const PortfolioCard: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => {
  const { settings } = useSettings();
  const cardVariants = {
    rest: { scale: 1, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' },
    hover: { scale: 1.05, boxShadow: '0px 20px 40px rgba(0, 245, 255, 0.3)' },
  };

  return (
    <motion.div
      className="bg-brand-surface rounded-lg overflow-hidden relative border border-brand-surface"
      variants={settings.animations ? cardVariants : {}}
      initial="rest"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <item.Icon className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-brand-primary font-bold">{item.category}</p>
        <h3 className="text-xl text-brand-text font-semibold mt-1">{item.title}</h3>
      </div>
    </motion.div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <AnimatedSection id="portfolio">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our <span className="text-brand-primary">Portfolio</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default PortfolioSection;