# APISuite UI Extension Type Definitions

This library provides the typings and a base (abstract) implementation of the [APISuite UI Extensions system](https://cloudoki.atlassian.net/wiki/spaces/AS/pages/275054593/UI+Extensions).

The goal of this project is to provide static typing support for extension developers so that the APISuite and UI extensions, even though they're separate projects, can have dev-time type hints and an enforceable build-time contract that should also help making sure that a given extension is compatible with the APISuite Portal where it is being used.

The library is rather small and as such we encourage using the code as documentation.

You can also refer to the [Example UI Extension](https://github.com/Cloudoki/apisuite-extension-ui-example) that uses these type definitions for a fully-featured but simple extension example.

## Using the library

To install this library, run the following:

    npm install --save-dev Cloudoki/apisuite-extension-ui-types

You can then import the type definitions you need in your project:

```javascript
import { Extension, Hooks, MenuEntry } from "apisuite-extension-ui-types";

class MyExtension extends Extension {
  // ...
}
```

## Developing the library

### Local install

If you're working on the library itself you can install it in other projects locally with the following command:

    npm install /local/path/to/apisuite-extension-ui-types

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Excluding peerDependencies

On library development, one might want to set some peer dependencies, and thus remove those from the final bundle. You can see in [Rollup docs](https://rollupjs.org/#peer-dependencies) how to do that.

Good news: the setup is here for you, you must only include the dependency name in `external` property within `rollup.config.js`. For example, if you want to exclude `lodash`, just write there `external: ['lodash']`.

# Acknowledgements

Library based on the [TypeScript library starter](https://github.com/alexjoverm/typescript-library-starter).
