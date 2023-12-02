import logFeaturesStatus from '../utils/logFeaturesStatus.ts';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';
import addFeatures from './addFeatures.ts';
import addConfigFiles from './addConfigFiles.ts';

void (async () => {
  // log current features status
  logFeaturesStatus();

  // delete gitkeep files in src
  deleteGitKeepFilesInSrc();

  // add features to package.json and files to src if enabled in config/features.json
  addFeatures();

  // copy template files to src
  addConfigFiles();
})();
