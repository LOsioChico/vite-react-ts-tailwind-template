import type Spinner from '../types/spinner.ts';
import capitalize from './capitalize.ts';
import checkIfDependencieIsAdded from './checkIfDependencieIsAdded.ts';
import getDependencyName from './getDependencyName.ts';

const filterInstalledDependencies = async (
  dependencies: string[],
  spinner: Spinner,
) => {
  const dependenciesToInstall = [];

  for (const dependency of dependencies) {
    const dependencyName = getDependencyName(dependency);
    const isAdded = await checkIfDependencieIsAdded(dependencyName);

    if (isAdded)
      spinner.stop(`⚠️ ${capitalize(dependencyName)} already added!`);

    if (!isAdded) dependenciesToInstall.push(dependency);
  }

  return dependenciesToInstall;
};

export default filterInstalledDependencies;
