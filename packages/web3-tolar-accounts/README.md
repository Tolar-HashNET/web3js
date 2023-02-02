# web3-tolar-accounts

This is a sub-package of [@tolar/web3][repo].

This is the accounts package used in the `@tolar/web3-tolar` package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install @tolar/web3-tolar-accounts
```

### In the Browser

Build running the following in the [@tolar/web3][repo] repository:

```bash
npm run-script build-all
```

Then include `dist/web3-tolar-accounts.js` in your html file.
This will expose the `Web3TolarAccounts` object on the window object.

## Usage

```js
// in node.js
var Web3TolarAccounts = require("@tolar/web3-tolar-accounts");

var account = new Web3TolarAccounts("https://...");
```

-   ## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: https://tolar-clients.kwiki.io/docs/web3js
[repo]: https://github.com/Tolar-HashNET/web3js
