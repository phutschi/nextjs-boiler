# nextjs-eslint-jest-flow

This package is meant to give fast start into creating react applications. It uses [zeit/next.js](https://github.com/zeit/next.js) as framework and [facebook/jest](https://github.com/facebook/jest) for testing. It also integrates [facebook/flow](https://github.com/facebook/flow) for static typing.

## Tree

```
.
├── .babelrc
├── .eslintrc
├── .flowconfig
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── modules
│   └── pages
│       └── index.js
└── yarn.lock

3 directories, 8 files
```

The default directory for next is `./src` so pages sit here as well as all modules that you may define. You may want to check this great article on how to structure your application:

[Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

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
```

Take a look at [learnnextjs.com](https://learnnextjs.com/) to get a great overview on how to use next.