import fs from 'fs';
import { exec } from 'child_process';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';
import addConfigFiles from './addConfigFiles.ts';
import addFeatures from './addFeatures.ts';

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf-8'));

void (async () => {
  // remove dependencies
  exec('pnpm remove @types/node');

  // add features to package.json and files to src if enabled in config/features.json
  addFeatures();

  // delete gitkeep files in src
  if (config.deleteGitkeepFiles) deleteGitKeepFilesInSrc();

  // copy template files to src
  if (config.addTemplateConfigFiles) addConfigFiles();

  // delete the preinstall and postinstall scripts from package.json
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  delete packageJson.scripts['pnpm:devPreinstall'];
  delete packageJson.scripts.postinstall;

  fs.writeFileSync(
    './package.json',
    JSON.stringify(packageJson, null, 2) + '\n',
  );

  // delete the config folder and package.json script
  fs.rmSync('./config', { recursive: true });

  if (config.commitChanges) {
    // commit changes
    exec('git add .');
    exec(
      'git commit -m "feat: add features and config files, delete config folder and preinstall script"',
    );
    // exec('git push');
  }
})();
