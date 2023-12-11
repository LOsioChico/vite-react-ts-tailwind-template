import fs from 'fs/promises';

const modifyEslintrc = async ({
  target,
  fieldName,
  fieldValue,
  action,
}: AddAction) => {
  const eslintrc = JSON.parse(await fs.readFile('./.eslintrc.json', 'utf-8'));

  switch (action) {
    case 'add':
      if (Array.isArray(eslintrc[target])) {
        if (!eslintrc[target].includes(fieldValue))
          eslintrc[target].push(fieldValue);
      } else {
        eslintrc[target][fieldName!] = fieldValue;
      }
      break;
  }
};

interface AddAction {
  target: 'extends' | 'plugins' | 'rules';
  fieldName?: string;
  fieldValue: string;
  action: 'add';
}

export default modifyEslintrc;
