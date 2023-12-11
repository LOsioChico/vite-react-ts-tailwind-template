import type Dependencies from '../types/dependencies';

const dependencies: Dependencies = {
  zustand: {
    dependencies: ['zustand@4.4.7'],
    devDependencies: [],
  },
  vitest: {
    dependencies: [],
    devDependencies: [
      'jsdom@23.0.1',
      'vitest@1.0.2',
      '@vitest/ui@1.0.2',
      '@vitest/coverage-v8@1.0.2',
      '@testing-library/react@14.1.2',
    ],
  },
  reactIcons: {
    dependencies: ['react-icons@4.12.0'],
    devDependencies: [],
  },
  framerMotion: {
    dependencies: ['framer-motion@10.16.15'],
    devDependencies: [],
  },
  supabase: {
    dependencies: ['@supabase/supabase-js@2.39.0'],
    devDependencies: [],
  },
  reactQuery: {
    dependencies: ['@tanstack/react-query@5.13.4'],
    devDependencies: [
      '@tanstack/eslint-plugin-query@5.12.1',
      '@tanstack/react-query-devtools@5.13.5',
    ],
  },
};

export default dependencies;
