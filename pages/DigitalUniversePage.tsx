import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const DigitalUniversePage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <AnimatedSection id="digital-universe-intro">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Vitajte v Našom <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">Digitálnom Vesmíre</span>
          </h1>
          <p className="mt-6 text-lg text-brand-text-muted">
            Toto je nová, čistá stránka, ktorá demonštruje presmerovanie z interaktívneho prvku na domovskej stránke.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default DigitalUniversePage;