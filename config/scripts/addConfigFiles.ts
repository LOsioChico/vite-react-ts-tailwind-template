import copyConfigfiles from '../utils/copyConfigFiles.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addConfigFiles = async () => {
  const features = await enabledFeatures();

  for (const feature of features) {
    await copyConfigfiles(feature);
  }
};

export default addConfigFiles;
