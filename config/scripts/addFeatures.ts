import fs from 'fs';
import installFeatureDependencies from '../utils/installFeatureDependencies.ts';
import type Features from 'config/types/features.ts';
import type FeatureCategories from 'config/types/featureCategory.ts';
import type Feature from 'config/types/feature.ts';

const addFeatures = () => {
  const features = JSON.parse(
    fs.readFileSync('./config/features.json', 'utf8'),
  ) as Features;

  // get each category of features
  for (const category in features) {
    // get each feature in the category
    for (const feature in features[category as FeatureCategories]) {
      const featureEnabled =
        features[category as FeatureCategories][feature as Feature];

      // if the feature is enabled
      if (featureEnabled) {
        installFeatureDependencies(feature as Feature);
      }
    }
  }
};

export default addFeatures;
