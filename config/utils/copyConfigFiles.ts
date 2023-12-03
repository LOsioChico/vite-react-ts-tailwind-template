// import fs from 'fs';
import fs from 'fs/promises';
import path from 'path';
import type Feature from '../types/feature';
import configFiles from '../constants/configFiles.ts';

const copyConfigfiles = async (feature: Feature) => {
  console.log(`Adding ${feature} config files...`);

  const { files } = configFiles[feature];

  files.forEach((file) => {
    const { input, output, name } = file;

    console.log(`Adding ${name}...`);

    const outputDir = path.dirname(output);
    // add folder if it doesn't exist
    void fs.mkdir(outputDir, { recursive: true });
    void fs.copyFile(input, output);

    console.log(`Added ${name}!`);
  });
};

export default copyConfigfiles;
