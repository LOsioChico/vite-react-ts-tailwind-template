import fs from 'fs/promises';
import type Features from 'config/types/features';
import type Feature from 'config/types/feature';

const enabledFeatures = async () => {
  const features = JSON.parse(
    await fs.readFile('./config/features.json', 'utf8'),
  ) as Features;

  const enabledFeaturesResult: Feature[] = Object.keys(features).filter(
    (feature) => features[feature as Feature],
  ) as Feature[];

  return enabledFeaturesResult;
};

export default enabledFeatures;
