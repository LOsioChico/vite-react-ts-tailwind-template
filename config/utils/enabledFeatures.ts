import fs from 'fs/promises';
import type Features from '../types/features';
import type Feature from '../types/feature';

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
