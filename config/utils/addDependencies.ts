import filterInstalledDependencies from './filterInstalledDependencies.ts';
import installDependencies from './installDependencies.ts';

const addDependencies = (dependencies: string[], { dev = false } = {}) => {
  if (!dependencies.length) return;

  const dependenciesToInstall = filterInstalledDependencies(dependencies);

  if (dependenciesToInstall.length) {
    installDependencies(dependenciesToInstall, { dev });
  }
};

export default addDependencies;
