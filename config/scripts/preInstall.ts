import fs from 'fs';
import logFeaturesStatus from '../utils/logFeaturesStatus.ts';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';
import addFeatures from './addFeatures.ts';
import addConfigFiles from './addConfigFiles.ts';

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf-8'));

void (async () => {
  // log current features status
  logFeaturesStatus();

  // delete gitkeep files in src
  if (config.preinstall.deleteGitkeepFiles) deleteGitKeepFilesInSrc();

  // add features to package.json and files to src if enabled in config/features.json
  addFeatures();

  // copy template files to src
  if (config.preinstall.addTemplateConfigFiles) addConfigFiles();
})();
