# Character Sheet

### A simple [React](https://reactjs.org/) front end application using [Redux Toolkit](https://redux-toolkit.js.org/) for state management. Users can create character sheets for their tabletop RPGs and update them as their games progress.

## Demo App
You can see a demo version of this application deployed to [Cyclic](https://app.cyclic.sh) here: https://react-character-sheet.cyclic.app

## Application Info
This project is written in [TypeScript](https://www.typescriptlang.org/) and configured with [Node Package Manager](https://www.npmjs.com/). It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TypeScript [template](https://github.com/reduxjs/cra-template-redux-typescript).

It uses [Bootstrap](https://getbootstrap.com/) via the [React-Bootrap](https://react-bootstrap.github.io/) package for front end styling and structure. It uses [Jest](https://jestjs.io/) for front end testing. It also uses [Node Express](https://expressjs.com/) to serve the build in production.

Character sheets will be saved to local storage in the user's browser and will be loaded once returning to the application. Clearing the browser's cache will delete all saved data.

## Commands
`npm run dev` - Run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build` - Build the app for production to the `build` folder (using [Webpack](https://webpack.js.org/)). It correctly bundles React in production mode and optimizes the build for the best performance.

`npm start` - Run the Express server via Node and serve the production build.

`npm test` - Launches the test runner in the interactive watch mode.

`npm run eject` - Remove the single build dependency from the project. Once executed, there is no going back.

## Install Instructions
Node Package Manager (NPM) is used for dependencies. To install the application locally, follow these instructions:

1. Install [Node.js](https://nodejs.org/). NPM comes packaged with it.
2. Run `npm install` in the command line while in the project directory. It will install dependencies from the [package.json file](../main/package.json).
3. To build for development and run the local dev server at http://localhost:3000, run `npm run dev`.

## License
This project is open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
