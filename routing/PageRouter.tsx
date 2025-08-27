
import React, { useEffect } from 'react';
import { useRouter } from './useRouter';
import { routes } from './routes';
import HomePage from '../pages/HomePage';

const RouteRenderer: React.FC = () => {
  const { path } = useRouter();
  const route = routes.find(r => r.path === path);
  const PageComponent = route ? route.component : HomePage;
  return <PageComponent />;
};

const ScrollHandler: React.FC = () => {
  const { path } = useRouter();

  useEffect(() => {
    const fullHash = window.location.hash;
    const anchorIndex = fullHash.indexOf('/#');
    
    if (anchorIndex !== -1) {
      const id = fullHash.substring(anchorIndex + 2);
      // A short delay ensures the target component (especially on a new page) has rendered.
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // When navigating to a new page without an anchor, scroll to the top.
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [path]); // Rerun whenever the path from the hash changes

  return null;
};


const PageRouter: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <RouteRenderer />
    </>
  );
};

export default PageRouter;