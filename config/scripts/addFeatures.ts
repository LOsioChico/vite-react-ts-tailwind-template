import installFeatureDependencies from '../utils/installFeatureDependencies.ts';
import enabledFeatures from '../utils/enabledFeatures.ts';
import * as clack from '@clack/prompts';

const addFeatures = async () => {
  const features = await enabledFeatures();

  for (const feature of features) {
    const spinner = clack.spinner();
    await installFeatureDependencies(feature, spinner);
  }
};

export default addFeatures;
