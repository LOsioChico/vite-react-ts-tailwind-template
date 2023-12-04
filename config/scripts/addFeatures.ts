import installFeatureDependencies from '../utils/installFeatureDependencies.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addFeatures = async () => {
  const features = await enabledFeatures();

  for (const feature of features) {
    await installFeatureDependencies(feature);
  }
};

export default addFeatures;
