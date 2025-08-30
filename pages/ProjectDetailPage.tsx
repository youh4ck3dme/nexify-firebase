import React from 'react';
import { useRouter } from '../routing/useRouter';
import { projectsData, Project } from '../data/projects';
import AnimatedSection from '../components/ui/AnimatedSection';
import { projectVisuals } from '../components/projects/visuals';
import Link from '../routing/Link';
import { motion } from 'framer-motion';

// Helper to find project by slug (derived from projectUrl)
const findProjectBySlug = (slug: string): Project | undefined => {
    const fullPath = `#/projekty/${slug}`;
    return projectsData.find(p => p.projectUrl === fullPath);
}

const ProjectDetailPage: React.FC = () => {
    const { params } = useRouter();
    const project = findProjectBySlug(params.slug || '');

    if (!project) {
        return (
            <AnimatedSection>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold">Project Not Found</h2>
                    <Link href="/" className="text-brand-primary hover:underline mt-4 inline-block">Go back to Home</Link>
                </div>
            </AnimatedSection>
        );
    }

    const VisualComponent = projectVisuals[project.id];

    return (
        <AnimatedSection>
            <div className="container mx-auto px-4 py-12">
                <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}}>
                    <Link href="#/#projects" className="text-sm text-brand-primary hover:underline mb-6 inline-block"> &larr; Späť na projekty</Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-text">{project.title}</h1>
                    <p className="text-lg text-brand-secondary mt-1">{project.category}</p>
                </motion.div>

                <motion.div className="my-8 rounded-lg overflow-hidden border border-brand-primary/20 shadow-xl" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.7, delay: 0.2}}>
                    {VisualComponent ? <VisualComponent /> : <div className="w-full h-96 bg-gray-900/50"></div>}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div className="lg:col-span-2" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 0.4}}>
                        <h3 className="text-2xl font-bold text-brand-text">O Projekte</h3>
                        <p className="text-brand-text-muted leading-relaxed whitespace-pre-line">{project.longDescription}</p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 0.5}}>
                        <h3 className="text-2xl font-bold text-brand-text">Použité Technológie</h3>
                        <ul className="space-y-2">
                            {project.technologies.map((tech, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-brand-text-muted">{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div 
                    className="mt-16 text-center bg-brand-background-light p-8 rounded-lg border border-brand-primary/20 shadow-lg"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.6}}
                >
                    <h2 className="text-3xl font-bold text-brand-text">Máte podobný projekt?</h2>
                    <p className="text-brand-text-muted mt-2 max-w-2xl mx-auto">Radi vám pomôžeme premeniť vašu víziu na realitu. Kontaktujte nás pre nezáväznú konzultáciu.</p>
                    <Link href="#/kontakt" className="mt-6 inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-primary-dark transition-colors duration-300 shadow-lg">
                        Kontaktujte Nás
                    </Link>
                </motion.div>

            </div>
        </AnimatedSection>
    );
};

export default ProjectDetailPage;
