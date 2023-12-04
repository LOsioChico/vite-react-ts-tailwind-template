import type Configs from '../types/configs.ts';

const configureMenu: ConfigureMenu = [
  {
    label: 'Add template config files',
    value: 'addTemplateConfigFiles',
    hint: 'Only add if you add an additional feature',
  },
  {
    label: 'Delete gitkeep files',
    value: 'deleteGitkeepFiles',
    hint: 'It automatically deletes the .gitkeep files',
  },
  {
    label: 'Commit changes',
    value: 'commitChanges',
    hint: 'It automatically commits the changes',
  },
];

type ConfigureMenu = Array<{
  value: Configs;
  label: string;
  hint?: string | undefined;
}>;

export default configureMenu;
