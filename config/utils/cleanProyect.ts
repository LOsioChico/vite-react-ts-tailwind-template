import asyncExec from './asyncExec.ts';
import fs from 'fs/promises';
import modifyPackageJson from './modifyPackageJson.ts';
import modifyTsConfig from './modifyTsConfig.ts';

const cleanProyect = async () => {
  // remove dependencies
  const dependenciesToRemove = ['@types/node', '@clack/prompts', 'ts-node'];
  await asyncExec(`pnpm remove ${dependenciesToRemove.join(' ')}`);

  // delete postinstall scripts from package.json
  await modifyPackageJson({
    target: 'scripts',
    fieldName: 'postinstall',
    action: 'remove',
  });

  // delete the @types/node type from tsconfig
  await modifyTsConfig({
    target: 'compilerOptions',
    fieldName: 'types',
    fieldValue: '@types/node',
    action: 'remove',
  });

  // delete the config folder and package.json script
  await fs.rm('./config', { recursive: true });
};

export default cleanProyect;
