
import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import type { Settings, SettingsContextType } from '../types';

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const SETTINGS_STORAGE_KEY = 'nexify-settings';

const defaultSettings: Settings = {
  animations: true,
  background3d: true,
  parallax: true,
};

// Function to safely parse settings from localStorage
const loadSettingsFromStorage = (): Settings => {
  try {
    const storedSettings = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (storedSettings) {
      const parsed = JSON.parse(storedSettings);
      // Ensure all keys are present, falling back to defaults if a key is missing
      return { ...defaultSettings, ...parsed };
    }
  } catch (error) {
    console.error("Failed to load settings from localStorage", error);
  }
  return defaultSettings;
};


export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(loadSettingsFromStorage);

  // Effect to save settings whenever they change
  useEffect(() => {
    try {
      window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error("Failed to save settings to localStorage", error);
    }
  }, [settings]);


  const toggleSetting = useCallback((key: keyof Settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);
  
  const value = useMemo(() => ({ settings, toggleSetting }), [settings, toggleSetting]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};