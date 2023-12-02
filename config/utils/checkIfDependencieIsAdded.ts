import fs from 'fs';

const checkIfDependencieIsAdded = (dependencie: string) => {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  const dependencieExist =
    packageJson.dependencies[dependencie] ||
    packageJson.devDependencies[dependencie];

  return dependencieExist;
};

export default checkIfDependencieIsAdded;
