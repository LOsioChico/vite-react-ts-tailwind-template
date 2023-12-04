import asyncExec from './asyncExec.ts';
import * as clack from '@clack/prompts';
import isGitRepository from './isGitRepository.ts';

const commitChanges = async (isAnyFeatureEnabled: boolean) => {
  const spinner = clack.spinner();
  spinner.start(`Commiting changes...`);

  if (await isGitRepository() === false) {
    spinner.stop(`✖ Cannot commit changes. Not a git repository.`);
    return
  }

  await asyncExec(`git add .`);

  await asyncExec(
    isAnyFeatureEnabled
      ? `git commit -m "feat: add features and files to src, deleted config folder and cleaned proyect"`
      : `git commit -m "feat: deleted config folder and cleaned proyect"`,
  );

  await asyncExec(`git push`);

  spinner.stop(`✔ Commited changes.`);
};

export default commitChanges;
