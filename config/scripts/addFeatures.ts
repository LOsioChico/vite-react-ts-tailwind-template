import installFeatureDependencies from '../utils/installFeatureDependencies.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';

const addFeatures = async () => {
  const features = await enabledFeatures();

  await Promise.all(
    features.map(async (feature) => {
      await installFeatureDependencies(feature);
    }),
  );
};

export default addFeatures;
