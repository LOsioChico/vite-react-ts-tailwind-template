import type features from '../features.json';
import type FeatureCategories from './featureCategory';

// This is a bit of a hack, but it works.
type Feature = {
  [Category in FeatureCategories]: keyof (typeof features)[Category];
}[FeatureCategories];

export default Feature;
