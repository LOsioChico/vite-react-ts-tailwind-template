import type Feature from '../types/feature.ts';
import * as clack from '@clack/prompts';
import filesFeatureChanges from '../constants/filesFeatureChanges.ts';
import camelCaseToWords from '../utils/camelCaseToWords.ts';

const processFeatureChanges = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Processing ${camelCaseToWords(feature)} changes...`);

  await filesFeatureChanges[feature]();

  spinner.stop(`✔ Processed ${camelCaseToWords(feature)} changes.`);
};

export default processFeatureChanges;
