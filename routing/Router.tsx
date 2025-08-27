import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

interface RouterContextType {
  path: string;
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Helper function to get the current path from the hash
const getCurrentPath = () => {
  const hash = window.location.hash || '#/';
  // Handles both `#/about-us` and `#/#portfolio`
  // In both cases, the primary path is the part after the first '#' and before the second '#'
  return hash.substring(1).split('#')[0] || '/';
};

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(getCurrentPath());

  const handleHashChange = useCallback(() => {
    setPath(getCurrentPath());
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    // Also set the initial path in case the page is loaded with a hash
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  const value = useMemo(() => ({ path }), [path]);

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};