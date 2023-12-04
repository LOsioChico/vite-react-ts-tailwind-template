// import fs from 'fs';
import fs from 'fs/promises';
import path from 'path';
import type Feature from '../types/feature';
import configFiles from '../constants/configFiles.ts';
import * as clack from '@clack/prompts';

const copyConfigfiles = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Adding ${feature} config files...`);

  const { files } = configFiles[feature];

  for (const file of files) {
    const { input, output, name } = file;

    spinner.start(`Adding ${name}...`);

    const outputDir = path.dirname(output);
    // add folder if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    await fs.copyFile(input, output);

    spinner.stop(`Added ${name}!`);
  }
};

export default copyConfigfiles;
