# 🎨 Design System 2.0

The Design System 2.0 builds on Material UI (MUI) to provide a maintained and bullet proven set of UI components. It extends on the foundation of MUI to provide additional components documented with Storybook

> **Intention**
> It is not providing any business logic but instead is meant to help you focus on the business logic by providing comprehensive UI components. It's foundation is [Material UI](www.mui.com) while we extend on it to customize for anynines' needs.

## 📦 Installation

You first need to setup github private package access via [confluence](https://anynines.atlassian.net/wiki/spaces/B/pages/400523269/Setup+private+github+packages+repos+with+yarn+and+bundler).

```bash
# yarn
yarn add avarteqgmbh/a9s-design-system

# npm
npm install avarteqgmbh/a9s-design-system
```

## ✨ Available Scripts

In the project directory, you can run:

#### `yarn storybook`

Runs the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

#### `yarn build`

Builds the app for production or publishing to the `build` folder.\

## 🚀 Publishing

To publish a new version of the Design System, you first need to set a access token.
You can find one in Onepassword (NPM avarteq private github package management).

```
launchctl setenv PKG_ACCESS_TOKEN Github Access Token with Package Read/Write & Repo
```

Restart your terminal afterwards. Then run:

#### `yarn publish`

## 💎 Use Premium Features

To use MUI premium components like the `XGrid` or `DateRangePicker` you need to add a .env file to your root directory and add your MUI License key like this:

```
REACT_APP_MUI_LICENSE_KEY="..."
```

Find license key in 1Password as _MUI License key_, if you don't have access pm DL.

## ℹ️ More Info

#### **Material UI** (MUI)

You can use any component from **[Material UI](www.mui.com)** and simply import it from `@anynines/a9s-design-system` instead of `@mui/material`. If a component or type from MUI is not part of the design system you can also import it right from MUI, by default all components should just work fine.

#### **Storybook**

On top of Material UI we have built more helpful components. The documentation can be found here (TODO: Add deployed version of storybook here). Locally you can start storybook with `yarn storybook` on port `localhost:6006`.

#### **Boilerplate**

A React Boilerplate using Typescript proper ESLint and Prettier setup as well as the Design System to quickstart a basic frontend applciation, can be found [here](https://github.com/anynines/a9s-react-boilerplate).

#### **Token System**

The Design System comes with a light and dark mode following the anynines Corporate Identity. Anynines team can access the [Token System](https://github.com/avarteqgmbh/happy-token-system) to easily switch to the branding of one of our customers.
