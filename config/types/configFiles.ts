import type Feature from './feature';

type Configfiles = {
  [key in Feature]: {
    files: Array<{
      name: string;
      input: string;
      output: string;
    }>;
  };
};

export default Configfiles;
