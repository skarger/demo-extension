# Demo Browser Extension

Provides an example project structure for a browser extension.

The Mozilla Developer Network [documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) provides the basic inspiration.
This repository builds on those ideas to incorporate some additional choices:

* [Yarn](https://yarnpkg.com/lang/en/) for dependency management.
* A [webpack](https://webpack.js.org/) build process.

This project keeps the source code in `src`, and outputs the deployable extension into the `dist` directory.
As a starting point, the `src` directory is organized to loosely match the built extension in `dist`.
In a real project the `src` directory may include other files, such as JavaScript modules,
that the build process will compile into the output files composing the browser extension.

As in a typical webpack project, it's possible to include additional transformations to the source code. For example, we can apply Babel and/or Typescript.

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

## Development

To use the Firefox web-ext tool, run

```
yarn web-ext
```
