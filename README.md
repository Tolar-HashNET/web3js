<p align="center">
  <img src="assets/logo/web3js.jpg" width="200" alt="web3.js" />
</p>

# web3t - Tolar JavaScript API

This is the Tolar [JavaScript API][docs]
which connects to the [Generic JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) spec.

You need to run a local or remote [Tolar](https://www.tolar.io/) node to use this library.

Please read the [documentation][docs] for more.

## Installation

### Node

```bash
npm install @tolar/web3
```

### In the Browser

Use the prebuild `dist/web3.min.js`, or
build using the [web3t][repo] repository:

```bash
npm run-script build
```

Then include `dist/web3.js` in your html file.
This will expose `Web3` on the window object.

## Usage

```js
// in node.js
var Web3 = require('@tolar/web3');

var web3 = new Web3('https://...');
console.log(web3);
> {
    eth: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider):

```js
web3.setProvider("https://...");
// or
web3.setProvider(new Web3.providers.WebsocketProvider("https://..."));
```

There you go, now you can use it:

```js
web3.eth.getAccounts().then(console.log);
```

### Usage with TypeScript

We support types within the repo itself. Please open an issue here if you find any wrong types.

You can use `web3t` as follows:

```typescript
import Web3 from "web3";
const web3 = new Web3("https://...");
```

If you are using the types in a `commonjs` module like for example a node app you just have to enable `esModuleInterop` in your `tsconfig` compile option, also enable `allowSyntheticDefaultImports` for typesystem compatibility:

```js
"compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    ....
```

## Documentation

Documentation can be found at [ReadTheDocs][docs].

## Building

### Requirements

-   [Node.js](https://nodejs.org)
-   [npm](https://www.npmjs.com/)

```bash
sudo apt-get update
sudo apt-get install npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh - installs nvm
nvm install 14.15.1
nvm use 14.15.1 - this is the latest working version compatible with our packages
npm install
```

### Exceptions
"ERR! stack Error: `make` failed with exit code: 2" - delete package-lock file inside your project root and run npm install again
"Error: Cannot find module '/home/mario/PycharmProjects/web3jss/packages/web3-tolar/dist/index.js' from '/home/mario/PycharmProjects/web3jss'" - go to packages/web3-tolar and npm run tsc
"npm ERR! gyp info find Python using Python version 2.7.18 found at "/usr/bin/python2"
 npm ERR! gyp ERR! UNCAUGHT EXCEPTION
 npm ERR! gyp ERR! stack TypeError: Cannot assign to read only property 'cflags' of object '#<Object>'" - make sure to use Python3 instead of Python2
"Error: Cannot find module '@grpc/grpc-js'" - run "npm install @grpc/grpc-js" from your root folder


### Building (gulp)

Build only the web3.js package:

```bash
npm run-script build
```

Or build all sub packages as well:

```bash
npm run-script build-all
```

This will put all the browser build files into the `dist` folder.

### Testing (mocha)

```bash
npm test
```

[docs]: https://tolar-clients.kwiki.io/docs/web3js
[repo]: https://github.com/dream-factory-code/web3.js
[repo-readme]: https://github.com/dream-factory-code/web3.js/blob/1.x/README.md
