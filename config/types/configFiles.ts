import type Feature from './feature';

type Configfiles = Partial<{
  [key in Feature]: {
    files: Array<{
      name: string;
      input: string;
      output: string;
    }>;
    folders: Array<{
      name: string;
      input: string;
      output: string;
    }>;
  };
}>;

export default Configfiles;
