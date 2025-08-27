import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useSettings } from '../hooks/useSettings';
import TeamMemberIcon from '../components/icons/TeamMemberIcon';

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TeamMemberCard: React.FC<{ name: string; role: string; }> = ({ name, role }) => {
    const { settings } = useSettings();
    
    return (
        <motion.div className="text-center" variants={settings.animations ? itemVariants : {}}>
            <TeamMemberIcon className="w-32 h-32 mx-auto rounded-full shadow-lg shadow-brand-secondary/30 mb-4 border-2 border-brand-secondary object-cover" />
            <h4 className="text-xl font-bold text-brand-text">{name}</h4>
            <p className="text-brand-primary">{role}</p>
        </motion.div>
    );
};


const AboutUsPage: React.FC = () => {
  const { settings } = useSettings();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-16">
        <AnimatedSection id="about-intro">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                O <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">Nexify</span>
              </h1>
              <p className="mt-6 text-lg text-brand-text-muted">
                Sme kolektív digitálnych remeselníkov s vášňou pre posúvanie hraníc webového dizajnu a používateľského zážitku. Našou filozofiou je spájať špičkové technológie s umeleckou víziou a vytvárať tak nezabudnuteľné digitálne rozhrania.
              </p>
            </div>
        </AnimatedSection>

        <AnimatedSection id="our-mission" className="bg-brand-surface/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Naša misia</h2>
                <p className="text-brand-text-muted">
                    Vytvárať pohlcujúce a výkonné webové zážitky, ktoré tešia používateľov a prinášajú výsledky. Veríme v budúcnosť, kde web nie je len funkčný, ale aj krásny, interaktívny a hlboko pútavý. Táto stránka je živým dôkazom tohto presvedčenia.
                </p>
            </div>
        </AnimatedSection>

        <AnimatedSection id="tim">
            <motion.div 
                className="max-w-5xl mx-auto"
                variants={settings.animations ? containerVariants : {}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Náš tím</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <TeamMemberCard name="Alex Chroma" role="Creative Director" />
                    <TeamMemberCard name="Jasmine Vector" role="Lead Frontend Engineer" />
                    <TeamMemberCard name="Leo Pixel" role="UX/UI Specialist" />
                </div>
            </motion.div>
        </AnimatedSection>

         <AnimatedSection id="our-tech" className="bg-brand-surface/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Naše technológie</h2>
                <p className="text-brand-text-muted text-center mb-12">
                    Využívame moderný a výkonný stack na to, aby sme naše vízie premenili na realitu.
                </p>
                <motion.div 
                  className="flex flex-wrap justify-center gap-4"
                  variants={settings.animations ? containerVariants : {}}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.span variants={itemVariants} className="bg-brand-surface border border-brand-primary/50 text-brand-primary px-4 py-2 rounded-full">React</motion.span>
                    <motion.span variants={itemVariants} className="bg-brand-surface border border-brand-primary/50 text-brand-primary px-4 py-2 rounded-full">Framer Motion</motion.span>
                    <motion.span variants={itemVariants} className="bg-brand-surface border border-brand-primary/50 text-brand-primary px-4 py-2 rounded-full">Three.js / R3F</motion.span>
                    <motion.span variants={itemVariants} className="bg-brand-surface border border-brand-primary/50 text-brand-primary px-4 py-2 rounded-full">Tailwind CSS</motion.span>
                    <motion.span variants={itemVariants} className="bg-brand-surface border border-brand-primary/50 text-brand-primary px-4 py-2 rounded-full">Vanta.js</motion.span>
                    <motion.span variants={itemVariants} className="bg-brand-surface border border-brand-primary/50 text-brand-primary px-4 py-2 rounded-full">TypeScript</motion.span>
                </motion.div>
            </div>
        </AnimatedSection>
    </div>
  );
};

export default AboutUsPage;