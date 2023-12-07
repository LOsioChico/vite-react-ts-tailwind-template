import type Feature from '../types/feature';
import fs from 'fs/promises';
import * as clack from '@clack/prompts';
import capitalize from './capitalize.ts';
import modifyPackageJson from './modifyPackageJson.ts';
import modifyTsConfig from './modifyTsConfig.ts';

const processFeatureChanges = async (feature: Feature) => {
  const spinner = clack.spinner();
  spinner.start(`Processing ${capitalize(feature)} changes...`);

  switch (feature) {
    case 'vitest':
      // Modify .gitignore
      await updateFileContent('./.gitignore', (file) => {
        const text = '\n#Vitest\ncoverage\n';
        return file.includes(text) ? file : file + text;
      });

      // Modify package.json
      await modifyPackageJson({
        target: 'scripts',
        fieldName: 'test',
        fieldValue: 'vitest',
        action: 'add',
      });

      await modifyPackageJson({
        target: 'scripts',
        fieldName: 'test:ui',
        fieldValue: 'vitest --ui --coverage',
        action: 'add',
      });

      // Modify tsconfig.json
      await modifyTsConfig({
        target: 'compilerOptions',
        fieldName: 'types',
        fieldValue: 'vitest',
        action: 'add',
      });

      await modifyTsConfig({
        target: 'include',
        fieldName: 'types',
        fieldValue: 'vitest/globals',
        action: 'add',
      });
      break;
  }

  spinner.stop(`✔ Processed ${capitalize(feature)} changes.`);
};

const updateFileContent = async (
  filePath: string,
  modify: (file: string) => string,
) => {
  const file = await fs.readFile(filePath, 'utf8');
  await fs.writeFile(filePath, modify(file));
};

export default processFeatureChanges;
