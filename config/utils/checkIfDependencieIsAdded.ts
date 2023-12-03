import fs from 'fs/promises';

const checkIfDependencieIsAdded = async (dependencie: string) => {
  const packageJson = JSON.parse(await fs.readFile('./package.json', 'utf8'));

  const dependencieExist =
    packageJson.dependencies[dependencie] ||
    packageJson.devDependencies[dependencie];

  return dependencieExist;
};

export default checkIfDependencieIsAdded;
