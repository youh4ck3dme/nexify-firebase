import React from 'react';
import { useRouter } from './useRouter';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import BriefPage from '../pages/BriefPage';
import CareerPage from '../pages/CareerPage';
import DigitalUniversePage from '../pages/DigitalUniversePage';
import NexifyOnePage from '../pages/NexifyOnePage';
import PricingPage from '../pages/PricingPage';
import ProjectsPage from '../pages/ProjectsPage';
import AboutUsPage from '../pages/AboutUsPage';

const PageRouter: React.FC = () => {
  const { path } = useRouter();

  switch (path) {
    case '/':
      return <HomePage />;
    case '/services':
      return <ServicesPage />;
    case '/contact':
      return <ContactPage />;
    case '/projects/:slug':
      return <ProjectDetailPage />;
    case '/about':
      return <AboutPage />;
    case '/about-us':
        return <AboutUsPage />;
    case '/blog':
        return <BlogPage />;
    case '/brief':
        return <BriefPage />;
    case '/career':
        return <CareerPage />;
    case '/digital-universe':
        return <DigitalUniversePage />;
    case '/nexify-one':
        return <NexifyOnePage />;
    case '/pricing':
        return <PricingPage />;
    case '/projects':
        return <ProjectsPage />;
    default:
      return <HomePage />; // Or a 404 page
  }
};

export default PageRouter;
