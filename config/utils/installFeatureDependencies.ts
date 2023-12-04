import type Feature from 'config/types/feature';
import addDependencies from './addDependencies.ts';
import type Spinner from '../types/spinner.ts';
import capitalize from './capitalize.ts';

const installFeatureDependencies = async (
  feature: Feature,
  spinner: Spinner,
) => {
  spinner.start(`Adding ${capitalize(feature)} dependencies...`);

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

  await addDependencies(dependencies, { spinner });
  await addDependencies(devDependencies, { dev: true, spinner });

  spinner.stop(`Added ${feature} dependencies.`);
};

export default installFeatureDependencies;
