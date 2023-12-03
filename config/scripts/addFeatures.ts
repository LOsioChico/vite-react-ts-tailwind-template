import installFeatureDependencies from '../utils/installFeatureDependencies.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addFeatures = async () => {
  const features = await enabledFeatures();

  features.forEach((feature) => {
    void installFeatureDependencies(feature);
  });
};

export default addFeatures;
