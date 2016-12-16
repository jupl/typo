# Typo <sub><sub><sub>TypeScript Boilerplate</sub></sub></sub>
[![Travis](http://img.shields.io/travis/jupl/typo.svg?style=flat-square&label=travis)](https://travis-ci.org/jupl/typo)
[![Dependencies](http://img.shields.io/david/jupl/typo.svg?style=flat-square)](https://david-dm.org/jupl/typo)
[![Dev Dependencies](http://img.shields.io/david/dev/jupl/typo.svg?style=flat-square)](https://david-dm.org/jupl/typo?type=dev)

## Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
- [Project Resources](#project-resources)

## About
This is a boilerplate project for developing client-side code using [TypeScript](https://www.typescriptlang.org/).

[<sup>Back to top</sup>](#typo-typescript-boilerplate)

## Prerequisites
- [Node.js](https://nodejs.org/en/) (6.x minimum required)
  - [npm CLI](https://docs.npmjs.com/cli/npm) is usually included with Node.js
- [Yarn](https://yarnpkg.com/en/docs/install) (recommended)
- Editor with support for TypeScript, [TSLint](https://palantir.github.io/tslint/), and [EditorConfig](http://editorconfig.org/) (ex. [Visual Studio Code](https://code.visualstudio.com/))

[<sup>Back to top</sup>](#typo-typescript-boilerplate)

## Getting Started
1. Clone/download this repository.
2. Install dependencies using npm **or** Yarn:
  - `npm install`
  - `yarn`
3. Start running tasks as described below in the [tasks section](#tasks).

[<sup>Back to top</sup>](#typo-typescript-boilerplate)

## Project Structure

### Overview
```
typo/
├─ .webpack/   # Webpack build configuration builder
├─ assets/     # Static files to icnlude in builds
├─ coverage/   # Code coverage reports
├─ dist/       # Result build data from build tasks
├─ src/
│  ├─ common/                  # Shared code used throughout project
│  │  └─ declarations.d.ts     # TypeScript declarations for project
│  └─ app.tsx # Application entry point
├─ hot─server.js     # Source code for local development server
├─ package.json      # Configuration, tasks, and dependencies
├─ preprocessor.js   # Set up TypeScript for Jest
├─ tsconfig.json     # TypeScript configuration
├─ tslint.json       # TypeScript linting rules
├─ webpack.config.js # Webpack build configuration
└─ yarn.lock         # Dependency pinning from Yarn
```

### Entry Points
When JavaScript code is built, any files directly inside the `src/` directory are used to create the output files. The boilerplate currently generates `app.js`, as there is a single entry point inside `src/`. (`src/app.tsx`) If there are more than one entry points more files generated as well as an additional file `common.js`, which contains shared code across all entry points. `common.js` must be loaded before you load an entry point. You can see what gets generated by running the `build:dev`/`build:prod` task. (see the [tasks section](#tasks))

### Other Files

#### `*.test.ts`, `*.test.tsx`
Tests for components/domains/logic/etc. Some guides on tests include:
- [Jest](https://facebook.github.io/jest/docs/api.html)

#### `__snapshots__`
Generated files/directories when using Jest's [snapshot feature](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing). These files should be left to Jest and not touched manually.

[<sup>Back to top</sup>](#typo-typescript-boilerplate)

## Tasks
Tasks can be executed in the following manner:
```
npm run [command]  # npm
yarn run [command] # Yarn
```
Examples:
```
npm run build:dev
yarn run lint
```

### `server:hot`
Start a local development server in port 3000 by default. To use another port have the environment variable `PORT` set to a number or modify `hot-server.js`. This task is also available as an alias to `server`. The following is provided in the development server:
- [Hot reloading](https://webpack.github.io/docs/hot-module-replacement.html)

### `build:dev`
Build application and include assets into a packaged build in the `dist/` directory. This build is not minifed and includes source maps. Ideal for development.

### `build:prod`
Build application and include assets into a packaged build in the `dist/` directory. This build is minified (with dead code elimination) and does not include source maps. Ideal for production. This task is also available as an alias to `start`. (`npm start`, `yarn start`)

### `test`
Run tests once using Jest. For more information visit the [documentation for Jest](facebook.github.io/jest/docs/configuration.html).

### `test:watch`
Run tests once and rerun on changes using Jest.

### `lint`
Verify that code is valid using TypeScript and TSLint. For customzation modify `tsconfig.json` and/or `tslint.json`.

### `coverage`
Like `test` task, but also collects code coverage, which becomes available in the `coverage/` directory.

### `coverage:watch`
Run converage once and rerun on changes using Jest.

[<sup>Back to top</sup>](#typo-typescript-boilerplate)

## Project Resources
- Language
  - [TypeScript](http://www.typescriptlang.org/)
  - [TSLint](https://palantir.github.io/tslint/)
- Libraries
  - [normalize.css](https://necolas.github.io/normalize.css/)
- Testing
  - [Jest](http://facebook.github.io/jest/)
- Build Tools
  - [Webpack](https://webpack.github.io/)

[<sup>Back to top</sup>](#typo-typescript-boilerplate)
