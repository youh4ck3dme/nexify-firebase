import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">O Nás</h1>
        <p className="text-lg text-brand-text-muted leading-relaxed">
          Sme tím vášnivých digitálnych expertov, ktorí sa zameriavajú na tvorbu výnimočných webových a mobilných aplikácií. Našou misiou je pomáhať klientom rásť a inovovať prostredníctvom moderných technológií a kreatívnych riešení.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default AboutPage;
