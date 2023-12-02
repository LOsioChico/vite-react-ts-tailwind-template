import type Configfiles from 'config/types/configFiles';
import path from 'path';

// we need to use this because of esm
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1); // Remove initial slash

const configFiles: Configfiles = {
  zustand: {
    files: [
      {
        name: 'zustand store template',
        input: path.resolve(__dirname, '../templates/zustand/zustand.ts'),
        output: path.resolve(__dirname, '../../src/store/zustand.ts'),
      },
    ],
  },
  vitest: {
    files: [],
  },
};

export default configFiles;
