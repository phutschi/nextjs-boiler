# nextjs-eslint-jest-flow

This package is meant to give fast start into creating small react applications. It uses [zeit/next.js](https://github.com/zeit/next.js) as framework and [facebook/jest](https://github.com/facebook/jest) for testing. It also integrates [facebook/flow](https://github.com/facebook/flow) for static typing.

## How to use
1. Clone this repo & install dependencies:

```zsh
git clone https://github.com/quiez/nextjs-eslint-jest-flow <your-project-name>
cd <your-project-name>
npm install
```

2. Change `name` and `author` in `package.json` to fit to your project.
3. Start writing code!
4. Start `next`:

```zsh
npm run dev # starts the development server with hot module reload etc.
npm run build # builds your project for production in ./src
npm run start # starts your built project (for production)
npm run test # run tests with jest
```

Take a look at [learnnextjs.com](https://learnnextjs.com/) to get a great overview on how to use next.

## Tree

```
.
├── .babelrc
├── .eslintrc
├── .flowconfig
├── .gitignore
├── README.md
├── coverage
│   └── coverage-final.json
├── jest.config.js
├── package.json
├── src
│   ├── modules
│   │   └── components
│   │       ├── button
│   │       │   ├── __tests__
│   │       │   │   └── button.test.js
│   │       │   └── index.js
│   │       └── index.js
│   ├── pages
│   │   ├── about.js
│   │   └── index.js
│   └── utils
│       └── shim.js
└── yarn.lock

8 directories, 15 files
```

The default directory for next is `./src` so pages sit here as well as all modules that you may define. You may want to check this great article on how to structure your application:

[Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

## Structure
### Modules
The modules folder includes everything that is not a page like components, authentication or whatever. Every modules goes in it's own folder and has for example the following tree:

```
.
└── components
    ├── button
    │   ├── __tests__
    │   │   └── button.test.js
    │   └── index.js
    └── index.js
```

`button/index.js` defines the button and exports it as default. In `components/index.js` you would import all components and export them as named exports:

```javascript
import Button from './button';

export { Button }
```

You could now import the components directly or use the `module-alias` plugin defined in `.babelrc`:

```javascript
"plugins": [
    ["module-alias", [{ "src": "./src/modules/components", "expose": "components" }]]
  ],
```

This creates an alias `components` which always points to `./src/modules/components`. This makes it even easier to import the components. All you need to do is:

```javascript
import Button from 'components/button';
// OR
import { Button } from 'components';
```