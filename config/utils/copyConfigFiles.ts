import fs from 'fs/promises';
import path from 'path';
import type Feature from '../types/feature';
import configFiles from '../constants/configFiles.ts';
import * as clack from '@clack/prompts';
import camelCaseToWords from './camelCaseToWords.ts';

const copyConfigfiles = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Adding ${camelCaseToWords(feature)} config files...`);

  const { files } = configFiles[feature];

  if (!files.length) {
    spinner.stop(`✔ No config files to add for ${camelCaseToWords(feature)}.`);
    return;
  }

  for (const file of files) {
    const { input, output, name } = file;

    spinner.message(`Adding ${name}...`);

    try {
      await copyFile(input, output);
      spinner.stop(`✔ Added ${name}!`);
    } catch (error) {
      if (error instanceof Error)
        spinner.stop(`❌ Error adding ${name}: ${error.message}`);
    }
  }
};

const copyFile = async (input: string, output: string) => {
  const outputDir = path.dirname(output);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.copyFile(input, output);
};

export default copyConfigfiles;
