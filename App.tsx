
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SettingsProvider } from './context/SettingsContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VantaBackground from './components/VantaBackground';
import { Router } from './routing/Router';
import PageRouter from './routing/PageRouter';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <Router>
        <div className="relative min-h-screen bg-brand-bg font-sans overflow-x-hidden">
          <VantaBackground />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: '#1D103A',
                color: '#E0D8FF',
                border: '1px solid #4A3F6D',
              },
            }}
          />
          <Header />
          <main>
            <PageRouter />
          </main>
          <Footer />
        </div>
      </Router>
    </SettingsProvider>
  );
};

export default App;