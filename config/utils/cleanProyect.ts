import { exec } from 'child_process';
import fs from 'fs/promises';

const cleanProyect = async () => {
  // remove dependencies
  exec('pnpm remove @types/node');

  // delete postinstall scripts from package.json
  const packageJson = JSON.parse(await fs.readFile('./package.json', 'utf-8'));

  delete packageJson.scripts.postinstall;

  await fs.writeFile(
    './package.json',
    JSON.stringify(packageJson, null, 2) + '\n',
  );

  // delete the config folder and package.json script
  await fs.rmdir('./config', { recursive: true });
};

export default cleanProyect;
