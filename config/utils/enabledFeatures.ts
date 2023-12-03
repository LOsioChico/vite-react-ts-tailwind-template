import fs from 'fs/promises';
import type Features from 'config/types/features';
import type FeatureCategories from 'config/types/featureCategory';
import type Feature from 'config/types/feature';

const enabledFeatures = async () => {
  const features = JSON.parse(
    await fs.readFile('./config/features.json', 'utf8'),
  ) as Features;

  const enabledFeaturesResult: Feature[] = [];

  // get each category of features
  for (const category in features) {
    // get each feature in the category
    for (const feature in features[category as FeatureCategories]) {
      const featureEnabled =
        features[category as FeatureCategories][feature as Feature];

      // if the feature is enabled
      if (featureEnabled) enabledFeaturesResult.push(feature as Feature);
    }
  }

  return enabledFeaturesResult;
};

export default enabledFeatures;
