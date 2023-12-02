import type Feature from './feature';
import type FeatureCategories from './featureCategory';

type Features = {
  [key in FeatureCategories]: {
    [key in Feature]: boolean;
  };
};

export default Features;
