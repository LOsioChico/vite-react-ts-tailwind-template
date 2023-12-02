import type Feature from 'config/types/feature';
import addDependencies from './addDependencies.ts';

const installFeatureDependencies = (feature: Feature) => {
  console.log(`Adding ${feature} dependencies...`);

  const dependencies = [];
  const devDependencies = [];

  switch (feature) {
    case 'zustand':
      dependencies.push('zustand@4.4.7');
      break;
    case 'vitest':
      devDependencies.push('vitest@0.34.6');
      devDependencies.push('jsdom@23.0.1');
      devDependencies.push('@testing-library/react@14.1.2');
      break;
  }

  addDependencies(dependencies);
  addDependencies(devDependencies, { dev: true });
};

export default installFeatureDependencies;
