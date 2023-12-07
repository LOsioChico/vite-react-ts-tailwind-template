import asyncExec from '../utils/asyncExec.ts';
import * as clack from '@clack/prompts';
import isGitRepository from '../utils/isGitRepository.ts';

const commitChanges = async (isAnyFeatureEnabled: boolean) => {
  const spinner = clack.spinner();
  spinner.start(`Commiting changes...`);

  if (!(await isGitRepository())) {
    spinner.stop(`✖ Cannot commit changes. Not a git repository.`);
    return;
  }

  await asyncExec(`git add .`);

  await asyncExec(
    isAnyFeatureEnabled
      ? `git commit -m "feat: add features and files to src, deleted config folder and cleaned proyect"`
      : `git commit -m "feat: deleted config folder and cleaned proyect"`,
  );

  spinner.stop(`✔ Commited changes.`);
};

export default commitChanges;
