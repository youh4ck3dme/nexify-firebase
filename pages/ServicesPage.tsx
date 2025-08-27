import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <AnimatedSection id="services-intro">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Naše <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">Služby</span>
          </h1>
          <p className="mt-6 text-lg text-brand-text-muted">
            Ponúkame komplexné riešenia pre váš digitálny rast.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;