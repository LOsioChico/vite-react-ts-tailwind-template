import fsSync from 'fs';
import fs from 'fs/promises';
import path from 'path';
import * as clack from '@clack/prompts';

const deleteGitKeepFiles = async (directoryPath: string) => {
  const files = await fs.readdir(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileStat = await fs.stat(filePath);

    if (fileStat.isDirectory()) {
      await deleteGitKeepFiles(filePath);
    } else if (file === '.gitkeep') {
      await fs.unlink(filePath);
    }
  }
};

const deleteGitKeepFilesInSrc = async () => {
  const spinner = clack.spinner();
  spinner.start('Deleting gitkeep files in src...');

  const directoryPath = path.join(process.cwd(), 'src');

  if (fsSync.existsSync(directoryPath)) {
    await deleteGitKeepFiles(directoryPath);
  } else {
    console.error(`Directory ${directoryPath} does not exist.`);
  }

  spinner.stop('Gitkeep files deleted in src.');
};

export default deleteGitKeepFilesInSrc;
