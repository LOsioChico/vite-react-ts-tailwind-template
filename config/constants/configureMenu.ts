import type Configs from '../types/configs.ts';

const configureMenu: ConfigureMenu = [
  {
    label: 'Add config files and templates folders',
    value: 'addConfigAndTemplatesFiles',
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
