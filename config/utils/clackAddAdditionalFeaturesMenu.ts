import fs from 'fs/promises';
import * as clack from '@clack/prompts';
import type Features from '../types/features.ts';
import type Feature from '../types/feature.ts';
import addAdditionalFeaturesMenu from '../constants/addAdditionalFeaturesMenu.ts';

const featuresJson = JSON.parse(
  await fs.readFile('./config/features.json', { encoding: 'utf-8' }),
) as Features;

const clackAddAdditionalFeaturesMenu = async () => {
  const featuresToAdd = await clack.multiselect<
    Array<{
      value: Feature;
      label: string;
      hint?: string;
    }>,
    string
  >({
    message: 'Select the features you want to add:',
    options: addAdditionalFeaturesMenu,
    required: false,
    initialValues: Object.keys(featuresJson).filter(
      (key) => featuresJson[key as Feature] === true,
    ),
  });

  if (clack.isCancel(featuresToAdd)) {
    clack.outro('Operation cancelled.');
    process.exit(0);
  }

  const newFeaturesJson = Object.fromEntries(
    Object.keys(featuresJson).map((key) => [key, false]),
  ) as Features;

  featuresToAdd.forEach((key) => {
    newFeaturesJson[key as Feature] = true;
  });

  await fs.writeFile(
    './config/features.json',
    JSON.stringify(newFeaturesJson, null, 2),
  );
};

export default clackAddAdditionalFeaturesMenu;
