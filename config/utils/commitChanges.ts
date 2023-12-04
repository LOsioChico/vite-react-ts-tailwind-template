import asyncExec from './asyncExec.ts';
import enabledFeatures from './enabledFeatures.ts';

const commitChanges = async () => {
  const features = await enabledFeatures();

  if (features.length) {
    await asyncExec(`git add .`);
    await asyncExec(
      `git commit -m "feat: add ${features.join(', ')}" && git push`,
    );
  }
};

export default commitChanges;
