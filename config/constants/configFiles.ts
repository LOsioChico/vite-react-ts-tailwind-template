import type Configfiles from '../types/configFiles';
import path from 'path';

const inputBasePath = path.join(process.cwd(), 'config/templates');
const outputBasePath = path.join(process.cwd(), 'src');

const configFiles: Configfiles = {
  zustand: {
    files: [],
    folders: [
      {
        name: 'zustand store template',
        input: path.join(inputBasePath, 'zustand/store'),
        output: path.join(outputBasePath, 'store'),
      },
    ],
  },
  vitest: {
    files: [],
    folders: [
      {
        name: 'vitest __tests__ template',
        input: path.join(inputBasePath, 'vitest/__tests__'),
        output: path.join(outputBasePath, '__tests__'),
      },
    ],
  },
  reactIcons: {
    files: [],
    folders: [],
  },
};

export default configFiles;
