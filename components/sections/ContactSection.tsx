
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useSettings } from '../../hooks/useSettings';
import AnimatedSection from '../ui/AnimatedSection';
import LottiePlayer from '../ui/LottiePlayer';
import { loadingAnimationData } from '../../animations/loadingAnimation';
import { successAnimationData } from '../../animations/successAnimation';

const ContactSection: React.FC = () => {
  const { settings } = useSettings();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const toastId = toast.loading(
      <div className="flex items-center">
        <div className="w-12 h-12 -ml-2">
          <LottiePlayer animationData={loadingAnimationData} />
        </div>
        <span className="ml-1">Sending message...</span>
      </div>
    );

    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);

      toast.success(
        <div className="flex items-center">
          <div className="w-8 h-8">
            <LottiePlayer animationData={successAnimationData} loop={false} />
          </div>
          <span className="ml-2">Message Sent! We will get back to you soon.</span>
        </div>,
        {
          id: toastId,
        }
      );
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <AnimatedSection id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Create <span className="text-brand-primary">Together</span>
        </h2>
        <p className="text-brand-text-muted mb-8">
          Have a project in mind or just want to say hello? Drop us a line.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full bg-brand-surface px-4 py-3 rounded-md border border-brand-surface focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-brand-text" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full bg-brand-surface px-4 py-3 rounded-md border border-brand-surface focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-brand-text" />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Your Message" required className="w-full bg-brand-surface px-4 py-3 rounded-md border border-brand-surface focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-brand-text"></textarea>
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            className="px-10 py-3 h-[48px] w-[200px] bg-brand-secondary text-white font-bold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            whileHover={!isSubmitting && settings.animations ? { scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 199, 0.5)' } : {}}
            whileTap={!isSubmitting && settings.animations ? { scale: 0.95 } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LottiePlayer animationData={loadingAnimationData} style={{ height: '100%' }} />
            ) : (
              'Send Message'
            )}
          </motion.button>
        </div>
      </form>
    </AnimatedSection>
  );
};

export default ContactSection;