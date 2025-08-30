import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

interface RouterContextType {
  path: string;
  params: { [key: string]: string };
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Helper to parse path and extract params
const parsePath = (path: string, route: string): { match: boolean; params: { [key: string]: string } } => {
  const params: { [key: string]: string } = {};
  const pathParts = path.split('/').filter(p => p);
  const routeParts = route.split('/').filter(p => p);

  if (pathParts.length !== routeParts.length) {
    return { match: false, params: {} };
  }

  const match = routeParts.every((part, i) => {
    if (part.startsWith(':')) {
      params[part.substring(1)] = pathParts[i];
      return true;
    }
    return part === pathParts[i];
  });

  return { match, params };
};


const getCurrentPath = () => window.location.hash.substring(1) || '/';

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rawPath, setRawPath] = useState(getCurrentPath());

  const handleHashChange = useCallback(() => {
    setRawPath(getCurrentPath());
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const { path, params } = useMemo(() => {
    // This is a simplified logic. A real router would iterate over a list of routes.
    // For this app, we assume a structure like /projects/:slug
    const projectRoute = '/projects/:slug';
    const { match, params } = parsePath(rawPath, projectRoute);

    if (match) {
      return { path: '/projects/:slug', params };
    } 

    return { path: rawPath, params: {} };

  }, [rawPath]);

  const value = useMemo(() => ({ path, params }), [path, params]);

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};
