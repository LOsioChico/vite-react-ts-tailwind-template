/* eslint-disable @typescript-eslint/no-dynamic-delete */
import fs from 'fs/promises';

const modifyTsConfig = async ({
  target,
  fieldName,
  fieldValue,
  action,
}: ModifyTsConfig & { fieldValue?: string }) => {
  const tsConfig = JSON.parse(await fs.readFile('./tsconfig.json', 'utf-8'));

  switch (action) {
    case 'add':
      tsConfig[target][fieldName] = fieldValue;
      break;
    case 'remove':
      if (Array.isArray(tsConfig[target][fieldName])) {
        tsConfig[target][fieldName] = tsConfig[target][fieldName].filter(
          (value: string) => value !== fieldValue,
        );
      } else {
        delete tsConfig[target][fieldName];
      }
      break;
  }

  await fs.writeFile('./tsconfig.json', JSON.stringify(tsConfig, null, 2));
};

interface RemoveAction {
  target: 'compilerOptions' | 'include' | 'exclude';
  fieldName: string;
  action: 'remove' | 'add';
}

interface AddAction {
  target: 'compilerOptions' | 'include' | 'exclude';
  fieldName: string;
  fieldValue: string;
  action: 'remove' | 'add';
}

type ModifyTsConfig = RemoveAction | AddAction;

export default modifyTsConfig;
