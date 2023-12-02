import copyConfigfiles from '../utils/copyConfigFiles.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addConfigFiles = () => {
  enabledFeatures().forEach((feature) => {
    copyConfigfiles(feature);
  });
};

export default addConfigFiles;
