import filterInstalledDependencies from './filterInstalledDependencies.ts';
import installDependencies from './installDependencies.ts';

const addDependencies = async (
  dependencies: string[],
  { dev = false } = {},
) => {
  if (!dependencies.length) return;

  const dependenciesToInstall = await filterInstalledDependencies(dependencies);

  if (dependenciesToInstall.length) {
    installDependencies(dependenciesToInstall, { dev });
  }
};

export default addDependencies;
