import type Spinner from '../types/spinner.ts';
import filterInstalledDependencies from './filterInstalledDependencies.ts';
import installDependencies from './installDependencies.ts';

const addDependencies: AddDependencies = async (
  dependencies: string[],
  { dev = false, spinner },
) => {
  if (!dependencies.length) return;

  const dependenciesToInstall = await filterInstalledDependencies(
    dependencies,
    spinner,
  );

  if (dependenciesToInstall.length) {
    await installDependencies(dependenciesToInstall, { dev });
  }
};

type AddDependencies = (
  dependencies: string[],
  options: { dev?: boolean; spinner: Spinner },
) => Promise<void>;

export default addDependencies;
