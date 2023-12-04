import type Feature from '../types/feature.ts';

const addAdditionalFeaturesMenu: AddAdditionalFeaturesMenu = [
  {
    value: 'zustand',
    label: 'Zustand',
    hint: 'A small, fast and scalable bearbones state-management solution',
  },
  {
    value: 'vitest',
    label: 'Vitest',
    hint: 'A simple and fast test runner',
  },
];

type AddAdditionalFeaturesMenu = Array<{
  value: Feature;
  label: string;
  hint?: string | undefined;
}>;

export default addAdditionalFeaturesMenu;
