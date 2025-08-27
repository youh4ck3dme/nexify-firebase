import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutCanvasSection from '../components/sections/AboutCanvasSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutCanvasSection />
    </>
  );
};

export default HomePage;