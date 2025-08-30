import React from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '../../hooks/useSettings';
import AnimatedSection from '../ui/AnimatedSection';
import { projectsData } from '../../data/projects'; 
import Link from '../../routing/Link';

const ProjectCard: React.FC<{ project: typeof projectsData[0] }> = ({ project }) => {
  const { settings } = useSettings();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="bg-brand-surface rounded-lg overflow-hidden shadow-lg border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300"
      variants={settings.animations ? cardVariants : {}}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-sm text-brand-primary font-bold">{project.category}</p>
        <h3 className="text-xl text-brand-text font-semibold mt-1 mb-2">{project.title}</h3>
        <p className="text-brand-text-muted text-sm mb-4">{project.description}</p>
        <Link href={project.projectUrl} className="text-brand-primary font-bold hover:underline">
          Zobraziť Detail
        </Link>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Naše <span className="text-brand-secondary">Projekty</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
