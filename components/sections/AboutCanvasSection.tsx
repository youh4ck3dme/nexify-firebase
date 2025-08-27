import React from 'react';
import { motion } from 'framer-motion';
import Link from '../../routing/Link';
import { useSettings } from '../../hooks/useSettings';

const AboutCanvasSection: React.FC = () => {
    const { settings } = useSettings();

    return (
        <section className="py-20 md:py-28 text-center bg-brand-bg">
            <div className="container mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Objavte Náš Digitálny Vesmír
                    </h2>
                    <p className="max-w-2xl mx-auto text-brand-text-muted mb-12">
                        Prekročte hranice statického webu. Kliknutím na pulzujúcu sféru sa ponoríte do príbehu Nexify, kde sa stretáva technológia s kreativitou.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link href="#/digitalny-vesmir" aria-label="Prejsť na stránku Digitálny Vesmír">
                            <motion.div
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center cursor-pointer"
                                whileHover={settings.animations ? { scale: 1.1 } : {}}
                                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                            >
                                {/* Glowing background effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary"
                                    animate={settings.animations ? {
                                        scale: [1, 1.05, 1],
                                        opacity: [0.5, 0.7, 0.5],
                                    } : {}}
                                    transition={settings.animations ? {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    } : {}}
                                    style={{ filter: 'blur(40px)' }}
                                />
                                {/* Main orb */}
                                <div className="relative w-full h-full rounded-full bg-brand-surface border-2 border-brand-primary/50 flex items-center justify-center text-brand-text font-bold text-lg md:text-xl p-4">
                                    VSTÚPIŤ
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCanvasSection;