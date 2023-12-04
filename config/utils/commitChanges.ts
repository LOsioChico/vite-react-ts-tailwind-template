import asyncExec from './asyncExec.ts';
import enabledFeatures from './enabledFeatures.ts';
import * as clack from '@clack/prompts';

const commitChanges = async () => {
  const spinner = clack.spinner();
  spinner.start(`Commiting changes...`);

  const features = await enabledFeatures();

  await asyncExec(`git add .`);

  await asyncExec(
    features.length
      ? `git commit -m "feat: add features and files to src, deleted config folder and cleaned proyect"`
      : `git commit -m "feat: deleted config folder and cleaned proyect"`,
  );

  await asyncExec(`git push origin main`);

  spinner.stop(`✔ Commited changes.`);
};

export default commitChanges;
