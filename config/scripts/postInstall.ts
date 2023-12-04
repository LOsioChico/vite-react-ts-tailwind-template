import fs from 'fs/promises';
import * as clack from '@clack/prompts';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';
import addConfigFiles from './addConfigFiles.ts';
import commitChanges from '../utils/commitChanges.ts';
import addFeatures from './addFeatures.ts';
import clackConfigureMenu from '../utils/clackConfigureMenu.ts';
import clackAddAdditionalFeaturesMenu from '../utils/clackAddAdditionalFeaturesMenu.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';
import cleanProyect from '../utils/cleanProyect.ts';

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
    clack.outro('✖ Operation cancelled.');
    process.exit(0);
  }

  if (shouldConfigure) await clackConfigureMenu();

  const configJson = JSON.parse(
    await fs.readFile('./config/config.json', { encoding: 'utf-8' }),
  );

  // add additional features
  const shouldAddAdditionalFeatures = await clack.confirm({
    message: 'Do you want to add additional features?',
  });

  if (clack.isCancel(shouldAddAdditionalFeatures)) {
    clack.outro('✖ Operation cancelled.');
    process.exit(0);
  }

  if (shouldAddAdditionalFeatures) await clackAddAdditionalFeaturesMenu();

  const isAnyFeatureEnabled = Boolean((await enabledFeatures()).length);

  // add features to package.json and files to src if enabled in config/features.json
  if (isAnyFeatureEnabled) await addFeatures();
  // delete gitkeep files in src
  if (configJson.deleteGitkeepFiles) await deleteGitKeepFilesInSrc();
  // copy template files to src
  if (configJson.addTemplateConfigFiles) await addConfigFiles();
  // clean proyect
  await cleanProyect();

  if (configJson.commitChanges) await commitChanges(isAnyFeatureEnabled);

  clack.outro('✔ Proyect configured successfully.');
})().catch((error) => {
  clack.outro(`✖ ${error.message}`);
  process.exit(1);
});
