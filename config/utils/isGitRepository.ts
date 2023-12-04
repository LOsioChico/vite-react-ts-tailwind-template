import asyncExec from './asyncExec.ts';

const isGitRepository = async () => {
  try {
    await asyncExec(`git status`);
    return true;
  } catch (error) {
    return false;
  }
};

export default isGitRepository;
