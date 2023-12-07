import type Feature from '../types/feature.ts';
import * as clack from '@clack/prompts';
import capitalize from '../utils/capitalize.ts';
import filesFeatureChanges from '../constants/filesFeatureChanges.ts';

const processFeatureChanges = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Processing ${capitalize(feature)} changes...`);

  await filesFeatureChanges[feature]();

  spinner.stop(`✔ Processed ${capitalize(feature)} changes.`);
};

export default processFeatureChanges;
