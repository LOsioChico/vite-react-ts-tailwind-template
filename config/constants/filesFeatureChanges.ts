import modifyPackageJson from '../utils/modifyPackageJson.ts';
import type Feature from '../types/feature.ts';
import updateFileContent from '../utils/updateFileContent.ts';
import modifyTsConfig from '../utils/modifyTsConfig.ts';
import asyncExec from '../utils/asyncExec.ts';

const filesFeatureChanges: FilesFeatureChanges = {
  vitest: async () => {
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
      target: 'compilerOptions',
      fieldName: 'types',
      fieldValue: 'vitest/globals',
      action: 'add',
    });

    // Modify vite.config.ts
    await updateFileContent('./vite.config.ts', (file) => {
      const originalImportText = `import { defineConfig } from 'vite';`;
      const newImportText = `import { defineConfig } from 'vitest/config';`;

      // if text is already there, don't add it again
      if (file.includes(newImportText)) {
        return file;
      }

      const closeDefineConfig = `});`;
      const newConfigToAdd = {
        test: {
          include: ['src/__tests__/**/*.test.{ts,tsx}'],
          environment: 'jsdom',
          reporters: ['verbose'],
          globals: true,
          coverage: {
            provider: 'v8',
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['src/__tests__/**/*.{ts,tsx}', 'src/main.tsx'],
          },
        },
      };

      return file
        .replace(originalImportText, newImportText)
        .replace(
          closeDefineConfig,
          `${JSON.stringify(newConfigToAdd, null, 2).slice(2, -1)}});`,
        );
    });

    // Format vite.config.ts
    await asyncExec('prettier --config ./.prettierrc --write vite.config.ts');
  },
};

type FilesFeatureChanges = Partial<{
  [key in Feature]: () => Promise<void>;
}>;

export default filesFeatureChanges;
