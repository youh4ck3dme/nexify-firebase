import React from 'react';
import PortfolioSection from '../components/sections/PortfolioSection';
import ProjectsSection from '../components/sections/ProjectsSection';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <PortfolioSection />
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;