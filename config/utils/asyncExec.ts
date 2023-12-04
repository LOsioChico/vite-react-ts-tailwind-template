import { exec } from 'child_process';

const asyncExec = async (command: string) => {
  await new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`Failed to execute ${command}.`);
        reject(error);
      }
      if (stderr) {
        console.log(`Failed to execute ${command}.`);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

export default asyncExec;
