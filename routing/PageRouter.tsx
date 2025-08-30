import React from 'react';
import { useParams } from '../hooks/useRouter';
import MainPage from '../pages/MainPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

const PageRouter: React.FC = () => {
  const { path } = useParams();

  switch (path) {
    case '/':
      return <MainPage />;
    case '/services':
      return <ServicesPage />;
    case '/contact':
      return <ContactPage />;
    case '/projects/:slug':
      return <ProjectDetailPage />;
    default:
      return <MainPage />; // Or a 404 page
  }
};

export default PageRouter;
