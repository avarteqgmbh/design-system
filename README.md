# 🎨 Design System 2.0

This project was bootstrapped with Create React App (CRA). It builds on Material UI (MUI) to provide a maintained and bullet proven set of UI components. It follows the MUI standards in terms of folder structure, component names and props. For accessability and documentation it extends upon the official MUI documentation by adding an interactive and multi-themeable instance of storybook.

The Design System is the core library for UI components and helpers. It is not providing any business logic but instead is meant to help you focus on the business logic by providing comprehensive UI components. It's foundation is [Material UI](www.mui.com) while we extend on it to customize for anynines' needs.

### **Material UI** (MUI)
You can use any component from **[Material UI](www.mui.com)** and simply import it from `@anynines/a9s-design-system` instead of `@mui/material`.

### **Storybook**
On top of Material UI we have built more helpful components. The documentation can be found here (TODO: Add deployed version of storybook here). Locally you can start storybook with `yarn storybook` on port `localhost:6006`.

### **Boilerplate** 
A React Boilerplate using Typescript proper ESLint and Prettier setup as well as the Design System to quickstart a basic frontend applciation, can be found [here](https://github.com/anynines/a9s-react-boilerplate).

### **Token System** 
The Design System comes with a light and dark mode following the anynines Corporate Identity. Anynines team can access the [Token System](https://github.com/avarteqgmbh/happy-token-system) to easily switch to the branding of one of our customers.

## ✨ Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `yarn storybook`

Runs the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more inform ation.

## 💎 Use Premium Features

To use MUI premium components like the `x-grid` you need to add a .env file to your root directory and add your MUI Licence key like this:

```
REACT_APP_MUI_LICENSE="..."
```

Find licence key in 1Password as _MUI Licence key_, if you don't have access pm DL.
