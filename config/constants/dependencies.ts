import type Dependencies from 'config/types/dependencies';

const dependencies: Dependencies = {
  zustand: {
    dependencies: ['zustand@4.4.7'],
    devDependencies: [],
  },
  vitest: {
    dependencies: [],
    devDependencies: [
      'vitest@0.34.6',
      'jsdom@23.0.1',
      '@testing-library/react@14.1.2',
    ],
  },
};

export default dependencies;
