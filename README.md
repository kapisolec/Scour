# Scour

Next.js version of Scour

## How to work on the Project Locally?

1. Get the source code. If you intend to send a Pull Request then
   please follow [Github Flow](https://githubflow.github.io/).

```shell script
git clone https://github.com/kapisolec/Scour.git
```

2. Install yarn

```shell script
npm install -g yarn
```

3. Go to project directory:

```shell script
cd Scour
```

4. Install dependencies

```shell script
yarn install
```

5. Add husky pre-commit hooks support

```shell script
yarn husky install
```

6. Start project

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs `next dev` which starts Next.js in development mode

### `yarn build`

Runs `next build` which builds the application for production usage

### `yarn start`

Runs `next start` which starts a Next.js production server

### `yarn lint`

Runs `next lint` which runs ESLint to validate files based on the linter rules

### `yarn cypress:open`

Runs `cypress open` which starts cypress integration tests in the browser

### `yarn cypress:headless`

Runs `cypress run` which starts cypress integration tests in the console

### `yarn test`

Runs `jest --watch` which runs unit tests with jest runner

### `yarn test:coverage`

Runs `jest --coverage` which runs unit tests with jest runner and generates coverage report

### `yarn test:ci`

Runs `jest --forceExit --detectOpenHandles --maxWorkers=10 ` which runs unit tests with jest runner for CI/CD environment

## VS Code Extensions

For better experience add this extentions:
<br>

- `ESLint` by Dirk Baeumer
- `Prettier`
