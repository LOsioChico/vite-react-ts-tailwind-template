import fs from 'fs/promises';
import * as clack from '@clack/prompts';
import { exec } from 'child_process';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';
import addConfigFiles from './addConfigFiles.ts';
import addFeatures from './addFeatures.ts';
import clackConfigureMenu from '../utils/clackConfigureMenu.ts';
import clackAddAdditionalFeaturesMenu from '../utils/clackAddAdditionalFeaturesMenu.ts';
// import cleanProyect from '../utils/cleanProyect.ts';

const configJson = JSON.parse(
  await fs.readFile('./config/config.json', { encoding: 'utf-8' }),
);

void (async () => {
  clack.intro(
    '\x1b[46m\x1b[30m' + ' Configure the initial proyect ' + '\x1b[0m',
  );
  clack.note(`The config folder will be removed after the configuration
and the package.json file will be cleaned.`);

  // configure the initial proyect
  const shouldConfigure = await clack.confirm({
    message: 'Do you want to modify the default configuration?',
  });

  if (clack.isCancel(shouldConfigure)) {
    clack.outro('Operation cancelled.');
    process.exit(0);
  }

  if (shouldConfigure) await clackConfigureMenu();

  // add additional features
  const shouldAddAdditionalFeatures = await clack.confirm({
    message: 'Do you want to add additional features?',
  });

  if (clack.isCancel(shouldAddAdditionalFeatures)) {
    clack.outro('Operation cancelled.');
    process.exit(0);
  }

  if (shouldAddAdditionalFeatures) await clackAddAdditionalFeaturesMenu();

  clack.outro('Configuration completed successfully.');
  process.exit(0);

  // add features to package.json and files to src if enabled in config/features.json
  await addFeatures();

  // delete gitkeep files in src
  if (configJson.deleteGitkeepFiles) await deleteGitKeepFilesInSrc();

  // copy template files to src
  if (configJson.addTemplateConfigFiles) await addConfigFiles();

  // clean proyect
  // await cleanProyect();

  if (configJson.commitChanges) {
    // commit changes
    exec('git add .');
    exec(
      'git commit -m "feat: add features and config files, delete config folder"',
    );
    // exec('git push');
  }
})().catch((error) => {
  clack.outro(`✖ ${error.message}`);
  process.exit(1);
});
