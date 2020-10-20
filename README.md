# APISuite UI Extension Type Definitions

This library provides the typings and a base (abstract) implementation of the [APISuite UI Extensions system](https://cloudoki.atlassian.net/wiki/spaces/AS/pages/275054593/UI+Extensions).

The goal of this project is to provide static typing support for extension developers so that the APISuite and UI extensions, even though they're separate projects, can have dev-time type hints and an enforceable build-time contract that should also help making sure that a given extension is compatible with the APISuite Portal where it is being used.

The library is rather small and as such we encourage using the code as documentation.

You can also refer to the [Example UI Extension](https://github.com/Cloudoki/apisuite-extension-ui-example) that uses these type definitions for a fully-featured but simple extension example.

## Using the library

To install this library, run the following adapting the version you want:

    npm install --save-dev @apisuite/extension-ui-types

You can then import the type definitions you need in your project:

```javascript
import { Extension, Hooks, MenuEntry } from "@apisuite/extension-ui-types/v1";

class MyExtension extends Extension {
  // ...
}
```

## Documentation

To learn how to use the library and read the types documentation, refer to the public documentation page: https://cloudoki.github.io/apisuite-extension-ui-types/

## Developing the library

### Local install

If you're working on the library itself you can install it in other projects locally with the following command:

    npm install /local/path/to/apisuite-extension-ui-types/dist

### Build

To build the project run:

    npm run build

This will create the bundled project in the `dist/` folder.

### Release a new version

To release a new version use [npm's version command](https://docs.npmjs.com/cli/version).

For instance, to create a patch release, run:

    npm version patch

This will build the project, increment the version's patch field, commit these new changes and tag the commit.

Then, to publish the package to the npm registry, run:

    npm run dist

### Generate documentation

When you build the project (using `npm run build`), it also generates [TypeDoc](https://typedoc.org/) documentation in the `docs/` folder. This allows us to have that documentation served using GitHub Pages.

To publish the updated documentation to GitHub Pages, run

    npm run deploy-docs

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run deploy-docs`: Generate docs and push them to the `docs` branch.
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
