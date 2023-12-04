import asyncExec from './asyncExec.ts';
import fs from 'fs/promises';

const cleanProyect = async () => {
  // remove dependencies
  const dependenciesToRemove = ['@types/node', '@clack/prompts'];
  await asyncExec(`pnpm remove ${dependenciesToRemove.join(' ')}`);

  // delete postinstall scripts from package.json
  const packageJson = JSON.parse(await fs.readFile('./package.json', 'utf-8'));

  delete packageJson.scripts.postinstall;

  await fs.writeFile(
    './package.json',
    JSON.stringify(packageJson, null, 2) + '\n',
  );

  // delete the config folder and package.json script
  await fs.rm('./config', { recursive: true });
};

export default cleanProyect;
