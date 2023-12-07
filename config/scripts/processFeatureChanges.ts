import type Feature from '../types/feature.ts';
import * as clack from '@clack/prompts';
import filesFeatureChanges from '../constants/filesFeatureChanges.ts';

const processFeatureChanges = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Processing ${feature} changes...`);

  await filesFeatureChanges[feature]();

  spinner.stop(`✔ Processed ${feature} changes.`);
};

export default processFeatureChanges;
