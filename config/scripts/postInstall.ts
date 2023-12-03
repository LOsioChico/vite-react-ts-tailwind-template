import fs from 'fs';
import { exec } from 'child_process';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';
import addConfigFiles from './addConfigFiles.ts';
import addFeatures from './addFeatures.ts';
import logFeaturesStatus from '../utils/logFeaturesStatus.ts';
// import cleanProyect from '../utils/cleanProyect.ts';

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf-8'));

void (async () => {
  await logFeaturesStatus();

  // add features to package.json and files to src if enabled in config/features.json
  await addFeatures();

  // delete gitkeep files in src
  if (config.deleteGitkeepFiles) await deleteGitKeepFilesInSrc();

  // copy template files to src
  if (config.addTemplateConfigFiles) await addConfigFiles();

  // clean proyect
  // await cleanProyect();

  if (config.commitChanges) {
    // commit changes
    exec('git add .');
    exec(
      'git commit -m "feat: add features and config files, delete config folder"',
    );
    // exec('git push');
  }
})();
