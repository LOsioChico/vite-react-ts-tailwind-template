import fs from 'fs';
import { exec } from 'child_process';

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf-8'));

void (async () => {
  if (config.postinstall.deleteConfigFolder) {
    // delete the config folder and package.json script
    fs.rmSync('./config', { recursive: true });

    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
    delete packageJson.scripts['pnpm:devPreinstall'];
    fs.writeFileSync(
      './package.json',
      JSON.stringify(packageJson, null, 2) + '\n',
    );
  }

  if (config.postinstall.commitChanges) {
    // commit changes
    exec('git add .');
    exec(
      'git commit -m "feat: add features and config files, delete config folder and preinstall script"',
    );
    // exec('git push');
  }
})();
