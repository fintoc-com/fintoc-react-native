<h1 align="center">Fintoc React Native</h1>

<p align="center">
    <em>
        Use the <a href="https://docs.fintoc.com/docs/widget" target="_blank">Fintoc widget</a> within your React Native application as a View.
    </em>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@fintoc/fintoc-react-native" target="_blank">
    <img src="https://img.shields.io/npm/v/@fintoc/fintoc-react-native?label=version&logo=nodedotjs&logoColor=%23fff&color=306998" alt="NPM - Version">
</a>

<a href="https://github.com/fintoc-com/fintoc-react-native/actions?query=workflow%3Alinters" target="_blank">
    <img src="https://img.shields.io/github/workflow/status/fintoc-com/fintoc-react-native/linters?label=linters&logo=github" alt="Linters">
</a>
</p>

## Installation

Install using npm! (or your favourite package manager)

```sh
# Using npm
npm install @fintoc/fintoc-react-native

# Using yarn
yarn add @fintoc/fintoc-react-native
```

## Usage

`Fintoc React Native` exports a single component called `FintocWidgetView`. This is a React Native component that creates the same WebView from [the native WebView documentation](https://docs.fintoc.com/docs/widget-webview-integration#how-it-works). To use the Fintoc View, use the following _snippet_:

```js
import { FintocWidgetView } from '@fintoc/fintoc-react-native';
```

After retrieving the `FintocWidgetView` component, you are ready to instantiate the widget:

```jsx
const options = { ... };

const onSuccess = () => {
  console.log('SUCCESS');
};

const onExit = () => {
  console.log('EXIT');
};

export default function FintocWidgetScreen() {
  return (
    <FintocWidgetView
      options={options}
      onSuccess={onSuccess}
      onExit={onExit}
    />
  );
}
```

Here, `options` corresponds to an object with the parameters received by the widget (you can read more about these parameters [here](https://docs.fintoc.com/docs/widget-webview-integration#how-it-works)), and `onSuccess` and `onExit` correspond to the WebView redirections detailed [here](https://docs.fintoc.com/docs/widget-webview-integration#webview-redirections).

**Notice that** on close the Fintoc View **must be unmounted**. This is because the widget won't re-open if the Fintoc View isn't re-rendered, so I would recommend unmounting the component on the `onClose` method of the Fintoc View.

## TypeScript support

This package includes TypeScript declarations for the Fintoc View.

## Developing

To develop the package, you need to use `npm`. Install the dependencies:

```sh
npm install
```

To test locally, I recommend packaging the app. Remember to build the library first:

```sh
npm run build
npm pack
```

This will create a `fintoc-fintoc-react-native-1.3.1.tgz` file (with the corresponding package version). Now, go to another directory and create a React Native app (using Expo, perhaps). After createing the new application, add the following dependency to its `package.json` file:

```json
{
  "dependencies": {
    ...,
    "@fintoc/fintoc-react-native": "file:./path/to/fintoc-fintoc-react-native-0.3.1.tgz",
    ...
  }
}
```

Where `./path/to/fintoc-fintoc-react-native-0.3.1.tgz` corresponds to the path to the `.tgz` file created on the `npm pack` step. After running `npm install` on the new React Native app, you should be able to use Fintoc React Native to import the Fintoc View.

If you want to create a new _release_, you can run:

```sh
git switch main
npm run bump! <major|minor|patch>
```

This will create a new branch with the updated version from `main`.

## Acknowledgements

This implementation was written based on the input and experience of [**@marialuisaclaro**](https://github.com/marialuisaclaro) integrating the WebView using React Native, which served as a good starting point for the general idea of this library.
