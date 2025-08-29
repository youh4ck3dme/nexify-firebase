import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // načíta všetky VITE_* premenné z .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      // sprístupní VITE_GEMINI_API_KEY pre build
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});