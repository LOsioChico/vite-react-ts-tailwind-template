import type Configfiles from '../types/configFiles';
import path from 'path';

const inputBasePath = path.join(process.cwd(), 'config/templates');
const outputBasePath = path.join(process.cwd(), 'src');

const configFiles: Configfiles = {
  zustand: {
    files: [
      {
        name: 'zustand store template',
        input: path.join(inputBasePath, 'zustand/zustand.ts'),
        output: path.join(outputBasePath, 'store/zustand.ts'),
      },
    ],
  },
  vitest: {
    files: [],
  },
};

export default configFiles;
