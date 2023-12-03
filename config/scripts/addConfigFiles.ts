import copyConfigfiles from '../utils/copyConfigFiles.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addConfigFiles = async () => {
  const features = await enabledFeatures();

  features.forEach((feature) => {
    void copyConfigfiles(feature);
  });
};

export default addConfigFiles;
