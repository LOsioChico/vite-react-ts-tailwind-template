import fs from 'fs/promises';
import path from 'path';
import type Feature from '../types/feature';
import configFiles from '../constants/configFiles.ts';
import * as clack from '@clack/prompts';
import camelCaseToWords from './camelCaseToWords.ts';

const copyTemplatesFolders = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Adding ${camelCaseToWords(feature)} config files...`);

  const { folders } = configFiles[feature];

  if (!folders.length) {
    spinner.stop(`✔ No folders to to add for ${camelCaseToWords(feature)}.`);
    return;
  }

  for (const folder of folders) {
    const { input, output, name } = folder;

    spinner.message(`Copying ${name}...`);

    try {
      await copyFolder(input, output);
      spinner.stop(`✔ Copied ${name}!`);
    } catch (error) {
      if (error instanceof Error)
        spinner.stop(`❌ Error copying ${name}: ${error.message}`);
    }
  }
};

const copyFolder = async (src: string, dest: string) => {
  await fs.mkdir(dest, { recursive: true });
  const files = await fs.readdir(src);

  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    const fileStats = await fs.stat(srcPath);
    if (fileStats.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

export default copyTemplatesFolders;
