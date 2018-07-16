# Melany Delgado Junior to Mid Test

## Technology Stack

- [React](https://reactjs.org/)
- [react-router](https://reacttraining.com/react-router/)
- [Webpack](https://webpack.js.org)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [socket.io](https://socket.io)
- [MongoDB](https://www.mongodb.com)
- [Node](https://nodejs.org)
- [Sass](https://sass-lang.com)
- [Jest](https://jestjs.io)
- [Enzyme](https://github.com/airbnb/enzyme)

## Folder Structure

```
support-chat/
  node_modules/
  public/
    index.html
  server/
  src/
    assets/
    common/
    components/
    index.js
  package.json
  README.md
```

## Prerequisites

- Install MongoDB (https://docs.mongodb.com/manual/installation/)
- Install Node (https://nodejs.org/en/download/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server and the web app.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner for web app code.<br>
Run `npm test -- --coverage` for coverage testing.

### `npm test-server`

Launches the test runner server code.<br>
Run `npm test-server -- --coverage` for coverage testing.

### `npm run build`

Builds the app on the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the filenames include the hashes.

## Code formatting

The project uses [ESLint](https://eslint.org/) to check for common JS mistakes and bad practices.
There is a precommit hook setted up to run [Prettier](https://prettier.io/) for all modified files to comply with code styling.
