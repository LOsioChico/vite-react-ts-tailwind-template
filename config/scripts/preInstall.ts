import addFeatures from './addFeatures.ts';
import deleteGitKeepFilesInSrc from './deleteGitkeepFiles.ts';

void (async () => {
  // delete gitkeep files in src
  deleteGitKeepFilesInSrc();

  // add features to package.json and files to src if enabled in config/features.json
  addFeatures();
})();
