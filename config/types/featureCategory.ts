import type features from '../features.json';

type FeatureCategories = keyof typeof features;

export default FeatureCategories;
