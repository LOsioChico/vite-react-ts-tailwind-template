import type Feature from './feature';

type Dependencies = {
  [key in Feature]: {
    dependencies: string[];
    devDependencies: string[];
  };
};

export default Dependencies;
