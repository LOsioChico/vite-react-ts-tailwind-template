import fsSync from 'fs';
import fs from 'fs/promises';
import path from 'path';

const deleteGitKeepFiles = async (directoryPath: string) => {
  const files = await fs.readdir(directoryPath);

  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      const fileStat = await fs.stat(filePath);

      if (fileStat.isDirectory()) {
        void deleteGitKeepFiles(filePath);
      } else if (file === '.gitkeep') {
        await fs.unlink(filePath);
        console.log(
          `File ${file} deleted in ${directoryPath.split('\\').at(-1)}`,
        );
      }
    }),
  );
};

const deleteGitKeepFilesInSrc = async () => {
  // we need to use this because of esm
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1); // Remove initial slash
  const directoryPath = path.join(__dirname, '../../src');

  if (fsSync.existsSync(directoryPath)) {
    await deleteGitKeepFiles(directoryPath);
  } else {
    console.error(`Directory ${directoryPath} does not exist.`);
  }
};

export default deleteGitKeepFilesInSrc;
