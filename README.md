# Vite React Typescript Tailwind Starter

<p align="center">
    <img src="./public/vite.svg" width="240" height="240" alt="vite">
    <br>
    <br>
</p>

This template has been configured with all of the tools required to create a **React** Application using **TypeScript** and **TailwindCSS** with **Vite**.

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-F8BC45?style=for-the-badge&logo=prettier&logoColor=black)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Setup

1. `git clone https://github.com/LOsioChico/vite-react-ts-tailwind-template.git`
2. Modify the `package.json` file to use your project name, description, etc.
3. Modify the `config/features.json` file to add the features you want to use
4. Run `pnpm install` to install all of the project's dependencies (**warning:** the `config` folder will be removed after this step)
5. Build the project for production: `pnpm build`
6. Run the local development server: `pnpm dev`

### Dev Loop

- `dev` - run the local development server
- `build` - build the project files for distribution
- `preview` - locally preview the production build
- `lint` - run the linter
- `format` - run the code formatter
- `pnpm:devPreinstall` - this run automatically by pnpm before install, no need to run manually. It will remove the .gitkeep files from the empty directories, add the features with the config in `config/features.json` and remove the `config` folder

## Features

- ⚡️ [Vite](https://github.com/vitejs/vite) - Super fast build tool
- 🎨 [Tailwind CSS v3](https://tailwindcss.com) - Utility-first CSS framework
- 📏 [ESLint](https://eslint.org) - Find and fix code issues
- 💄 [Prettier](https://prettier.io) - Code formatter
- 🚀 [React Router](https://reactrouter.com) - Client-side routing

## Recommended IDE Setup

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-F8BC45?style=for-the-badge&logo=prettier&logoColor=black)

## TODO

- [✅] Add `.gitkeep` files to empty directories to keep them in the repo
- [✅] Add `React Router` for client-side routing
- [✅] Add script to remove `.gitkeep` files
- [✅] Add script to add new features like `Vitest`, `Zustand`, `React Icons`, etc.
- [✅] Add `Zustand` for state management
- [🔜] Add `config/config.json` file to configure the project preinstall script
- [🔜] Add `React Icons` for icons
- [🔜] Add `Vitest` for testing

## Contributing

Feel free to [open an issue](https://github.com/LOsioChico/vite-react-ts-tailwind-template/issues/new) or create a PR if you'd like to contribute 🙌

## License

The project is available as open source under the terms of the [MIT License ©](LICENSE).
