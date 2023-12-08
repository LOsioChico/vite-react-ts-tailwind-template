import type Feature from '../types/feature';
import addDependencies from './addDependencies.ts';
import * as clack from '@clack/prompts';
import featuresDependencies from '../constants/dependencies.ts';
import camelCaseToWords from './camelCaseToWords.ts';

const installFeatureDependencies = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Adding ${camelCaseToWords(feature)} dependencies...`);

  const { dependencies, devDependencies } = featuresDependencies[feature];

  await addDependencies(dependencies, { spinner });
  await addDependencies(devDependencies, { dev: true, spinner });

  spinner.stop(`✔ Added ${camelCaseToWords(feature)} dependencies.`);
};

export default installFeatureDependencies;
