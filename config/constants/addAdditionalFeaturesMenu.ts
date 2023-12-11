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
  {
    value: 'reactIcons',
    label: 'React Icons',
    hint: 'Include popular icons in your React projects easily',
  },
  {
    value: 'framerMotion',
    label: 'Framer Motion',
    hint: 'A production-ready motion library for React',
  },
  {
    value: 'supabase',
    label: 'Supabase',
    hint: 'Open source Firebase alternative',
  },
];

type AddAdditionalFeaturesMenu = Array<{
  value: Feature;
  label: string;
  hint?: string | undefined;
}>;

export default addAdditionalFeaturesMenu;
