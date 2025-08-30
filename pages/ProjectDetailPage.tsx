import React from 'react';
import { useParams } from '../hooks/useRouter';
import { projectsData, Project } from '../data/projects';
import AnimatedPage from '../components/ui/AnimatedPage';
import { projectVisuals } from '../components/projects/visuals';
import Link from '../routing/Link';
import { motion } from 'framer-motion';

// Helper to find project by slug (derived from projectUrl)
const findProjectBySlug = (slug: string): Project | undefined => {
    const fullPath = `#/projekty/${slug}`;
    return projectsData.find(p => p.projectUrl === fullPath);
}

const ProjectDetailPage: React.FC = () => {
    const { params } = useParams();
    const project = findProjectBySlug(params.slug || '');

    if (!project) {
        return (
            <AnimatedPage>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold">Project Not Found</h2>
                    <Link href="/" className="text-brand-primary hover:underline mt-4 inline-block">Go back to Home</Link>
                </div>
            </AnimatedPage>
        );
    }

    const VisualComponent = projectVisuals[project.id];

    return (
        <AnimatedPage>
            <div className="container mx-auto px-4 py-12">
                <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}}>
                    <Link href="#/#projects" className="text-sm text-brand-primary hover:underline mb-6 inline-block"> &larr; Späť na projekty</Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-text">{project.title}</h1>
                    <p className="text-lg text-brand-secondary mt-1">{project.category}</p>
                </motion.div>

                <motion.div className="my-8 rounded-lg overflow-hidden border border-brand-primary/20 shadow-xl" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.7, delay: 0.2}}>
                    {VisualComponent ? <VisualComponent /> : <div className="w-full h-96 bg-gray-900/50"></div>}
                </motion.div>

                <motion.div className="max-w-2xl mx-auto" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7, delay: 0.4}}>
                    <h3 className="text-2xl font-bold text-brand-text mb-4">O Projekte</h3>
                    <p className="text-brand-text-muted leading-relaxed">{project.description} Tento detailný popis by mohol byť ďalej rozšírený a obsahovať viac informácií o technológiách, výzvach a výsledkoch projektu.</p>
                    {/* Add more project details here */}
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default ProjectDetailPage;
