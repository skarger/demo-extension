# Demo Browser Extension

Provides an example project structure for a browser extension.

The Mozilla Developer Network [documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) provides the basic inspiration.
This repository builds on those ideas to incorporate some additional choices:

* [Yarn](https://yarnpkg.com/lang/en/) for dependency management.
* A [webpack](https://webpack.js.org/) build process, which outputs the deployable extension into the `dist` directory.

## Setup

Install dependencies:

```
yarn
```

## Build

Run webpack compilation:

```
yarn dev
```

For a production build, do this instead:

```
yarn build
```
