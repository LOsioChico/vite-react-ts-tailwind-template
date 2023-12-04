import { exec } from 'child_process';

const installDependencies = async (
  dependencies: string[],
  { dev = false } = {},
) => {
  if (!dependencies.length) return;

  console.log(`Adding ${dependencies.join(', ')}...`);

  const args = [...dependencies];
  if (dev) args.unshift('-D');

  // exec(`pnpm add ${args.join(' ')}`);
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
      console.log(`Added ${dependencies.join(', ')} successfully.`);
      resolve(stdout);
    });
  });
};

export default installDependencies;
