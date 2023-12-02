import installFeatureDependencies from '../utils/installFeatureDependencies.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addFeatures = () => {
  enabledFeatures().forEach((feature) => {
    installFeatureDependencies(feature);
  });
};

export default addFeatures;
