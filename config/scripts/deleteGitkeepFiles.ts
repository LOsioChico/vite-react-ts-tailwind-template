import fsSync from 'fs';
import fs from 'fs/promises';
import path from 'path';

const deleteGitKeepFiles = async (directoryPath: string) => {
  const files = await fs.readdir(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileStat = await fs.stat(filePath);

    if (fileStat.isDirectory()) {
      await deleteGitKeepFiles(filePath);
    } else if (file === '.gitkeep') {
      await fs.unlink(filePath);
      console.log(
        `File ${file} deleted in ${directoryPath.split('\\').at(-1)}`,
      );
    }
  }
};

const deleteGitKeepFilesInSrc = async () => {
  const directoryPath = path.join(process.cwd(), 'src');

  if (fsSync.existsSync(directoryPath)) {
    await deleteGitKeepFiles(directoryPath);
  } else {
    console.error(`Directory ${directoryPath} does not exist.`);
  }
};

export default deleteGitKeepFilesInSrc;
