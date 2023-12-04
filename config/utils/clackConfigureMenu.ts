import fs from 'fs/promises';
import * as clack from '@clack/prompts';
import configureMenu from '../constants/configureMenu.ts';

const configJson = JSON.parse(
  await fs.readFile('./config/config.json', { encoding: 'utf-8' }),
);

const clackConfigureMenu = async () => {
  const configsToChange = await clack.multiselect({
    message: 'Select the configuration options:',
    options: configureMenu,
    required: false,
    initialValues: Object.keys(configJson).filter(
      (key) => configJson[key] === true,
    ),
  });

  if (clack.isCancel(configsToChange)) {
    clack.outro('Operation cancelled.');
    process.exit(0);
  }

  const newConfigJson: Record<string, boolean> = Object.fromEntries(
    Object.keys(configJson).map((key) => [key, false]),
  );

  configsToChange.forEach((key) => {
    newConfigJson[key] = true;
  });

  await fs.writeFile(
    './config/config.json',
    JSON.stringify(newConfigJson, null, 2),
  );
};

export default clackConfigureMenu;
