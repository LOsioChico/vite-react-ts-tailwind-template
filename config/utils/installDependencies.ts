import { execSync } from 'child_process';

const installDependencies = (dependencies: string[], { dev = false } = {}) => {
  if (!dependencies.length) return;

  console.log(`Adding ${dependencies.join(', ')}...`);

  const args = [...dependencies];
  if (dev) args.unshift('-D');

  execSync(`pnpm add ${args.join(' ')}`, {
    stdio: 'inherit',
  });

  console.log(`${dependencies.join(', ')} added!`);
};

export default installDependencies;
