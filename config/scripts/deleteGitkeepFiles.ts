import fs from 'fs';
import path from 'path';

const deleteGitKeepFiles = (directoryPath: string) => {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      deleteGitKeepFiles(filePath); // Recursively enter subdirectories
    } else if (file === '.gitkeep') {
      fs.unlinkSync(filePath);
      console.log(
        `File ${file} deleted in ${directoryPath.split('\\').at(-1)}`,
      );
    }
  });
};

const deleteGitKeepFilesInSrc = () => {
  // we need to use this because of esm
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1); // Remove initial slash
  const directoryPath = path.join(__dirname, '../../src');

  if (fs.existsSync(directoryPath)) {
    deleteGitKeepFiles(directoryPath);
  } else {
    console.error(`Directory ${directoryPath} does not exist.`);
  }
};

export default deleteGitKeepFilesInSrc;
