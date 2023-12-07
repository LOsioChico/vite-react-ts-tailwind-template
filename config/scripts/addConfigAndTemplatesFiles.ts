import copyTemplatesFolders from '../utils/copyTemplatesFolders.ts';
import copyConfigfiles from '../utils/copyConfigFiles.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';
import processFeatureChange from './processFeatureChanges.ts';
import * as clack from '@clack/prompts';

const addConfigAndTemplatesFiles = async () => {
  const features = await enabledFeatures();

  if (!features.length) {
    const spinner = clack.spinner();
    spinner.start();
    spinner.stop('✔ No features enabled.');
  }

  for (const feature of features) {
    await copyConfigfiles(feature);
  }

  for (const feature of features) {
    await copyTemplatesFolders(feature);
  }

  for (const feature of features) {
    await processFeatureChange(feature);
  }
};

export default addConfigAndTemplatesFiles;
