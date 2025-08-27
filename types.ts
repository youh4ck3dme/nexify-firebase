
export interface Settings {
  animations: boolean;
  background3d: boolean;
  parallax: boolean;
}

export interface SettingsContextType {
  settings: Settings;
  toggleSetting: (key: keyof Settings) => void;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  variant?: 'primary' | 'secondary';
}