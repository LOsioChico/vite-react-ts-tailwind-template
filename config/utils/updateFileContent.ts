import fs from 'fs/promises';

const updateFileContent = async (
  filePath: string,
  modify: (file: string) => string,
) => {
  const file = await fs.readFile(filePath, 'utf8');
  await fs.writeFile(filePath, modify(file));
};

export default updateFileContent;
