import { exec } from 'child_process';

const asyncExec = async (command: string) => {
  await new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        if (!errorMsgExceptions.includes(command))
          console.log(`Failed to execute ${command}.`);
        reject(error);
      }
      if (stderr) {
        if (!errorMsgExceptions.includes(command))
          console.log(`Failed to execute ${command}.`);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

const errorMsgExceptions = ['git status'];

export default asyncExec;
