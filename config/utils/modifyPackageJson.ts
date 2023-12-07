/* eslint-disable @typescript-eslint/no-dynamic-delete */
import fs from 'fs/promises';

const modifyPackageJson = async ({
  target,
  fieldName,
  fieldValue,
  action,
}: ModifyPackageJson & { fieldValue?: string }) => {
  const packageJson = JSON.parse(await fs.readFile('./package.json', 'utf-8'));

  switch (action) {
    case 'add':
      packageJson[target][fieldName] = fieldValue;
      break;
    case 'remove':
      delete packageJson[target][fieldName];
      break;
  }

  await fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2));
};

interface RemoveAction {
  target: 'dependencies' | 'devDependencies' | 'scripts';
  fieldName: string;
  action: 'remove';
}

interface AddAction {
  target: 'dependencies' | 'devDependencies' | 'scripts';
  fieldName: string;
  fieldValue: string;
  action: 'add';
}

type ModifyPackageJson = RemoveAction | AddAction;

export default modifyPackageJson;
