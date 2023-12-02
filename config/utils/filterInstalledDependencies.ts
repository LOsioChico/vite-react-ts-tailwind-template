import checkIfDependencieIsAdded from './checkIfDependencieIsAdded.ts';
import getDependencyName from './getDependencyName.ts';

const filterInstalledDependencies = (dependencies: string[]) => {
  return dependencies.filter((dependency) => {
    const dependencyName = getDependencyName(dependency);
    const isAdded = checkIfDependencieIsAdded(dependencyName);

    if (isAdded) console.log(`${dependencyName} already added!`);

    return !isAdded;
  });
};

export default filterInstalledDependencies;
