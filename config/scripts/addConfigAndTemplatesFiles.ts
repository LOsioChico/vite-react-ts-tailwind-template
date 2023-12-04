import copyTemplatesFolders from '../utils/copyTemplatesFolders.ts';
import copyConfigfiles from '../utils/copyConfigFiles.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addConfigAndTemplatesFiles = async () => {
  const features = await enabledFeatures();

  for (const feature of features) {
    await copyConfigfiles(feature);
  }

  for (const feature of features) {
    await copyTemplatesFolders(feature);
  }
};

export default addConfigAndTemplatesFiles;
