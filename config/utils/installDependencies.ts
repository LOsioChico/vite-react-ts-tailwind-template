import { exec } from 'child_process';

const installDependencies = async (
  dependencies: string[],
  { dev = false } = {},
) => {
  if (!dependencies.length) return;

  const args = [...dependencies];
  if (dev) args.unshift('-D');

  await new Promise((resolve, reject) => {
    exec(`pnpm add ${args.join(' ')}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`Failed to add ${dependencies.join(', ')}.`);
        reject(error);
      }
      if (stderr) {
        console.log(`Failed to add ${dependencies.join(', ')}.`);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

export default installDependencies;
