import type Feature from '../types/feature';
import addDependencies from './addDependencies.ts';
import * as clack from '@clack/prompts';
import capitalize from './capitalize.ts';
import featuresDependencies from '../constants/dependencies.ts';

const installFeatureDependencies = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Adding ${capitalize(feature)} dependencies...`);

  const { dependencies, devDependencies } = featuresDependencies[feature];

  await addDependencies(dependencies, { spinner });
  await addDependencies(devDependencies, { dev: true, spinner });

  spinner.stop(`✔ Added ${feature} dependencies.`);
};

export default installFeatureDependencies;
