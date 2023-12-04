import checkIfDependencieIsAdded from './checkIfDependencieIsAdded.ts';
import getDependencyName from './getDependencyName.ts';

const filterInstalledDependencies = async (dependencies: string[]) => {
  const dependenciesToInstall = await Promise.all(
    dependencies.filter(async (dependency) => {
      const dependencyName = getDependencyName(dependency);
      const isAdded = await checkIfDependencieIsAdded(dependencyName);

      if (isAdded) console.log(`${dependencyName} already added!`);

      return !isAdded;
    }),
  );

  return dependenciesToInstall;
};

export default filterInstalledDependencies;
