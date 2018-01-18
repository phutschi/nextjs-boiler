# nextjs-boiler

This boilerplate is designed to give you a quick start on working with awesome [next.js](https://github.com/zeit/next.js). It packs some very useful things like `jest`, `eslint`, `flow`, etc. so you can start right away with writing your application. It also comews with a custom configuration for next.js which gives you the possibilty to use a CDN to host your app and to analyze it with `webpack-bundle-analyzer`.

## How to use
1. Clone this repo & install dependencies:

```zsh
git clone https://github.com/quiez/nextjs-boiler <your-project-name>
cd <your-project-name>
rm -rf .git/ # So you don't iclude all my commits in your new project
git init # To reinitialize git (optional, only if you want to use it)
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
npm export # exports the project to a static website into the .export folder
npm run analyze # builds the application and analyzes it with webpack-bundle-analyzer. Stores a static report to ./src/.next/analyze-report.html
```

Take a look at [learnnextjs.com](https://learnnextjs.com/) to get a great overview on how to use next.
## Structure
The default directory for next is `./src` so pages sit here as well as all modules that you may define. You may want to check this great article on how to structure your application: [Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

### Folders

|directory|description|
|---------|-----------|
|./src|starting point for the application|
|./src/pages|put all your pages here|
|./src/modules|put all modules here|
|./src/modules/components|here I put all components that I build (Button, Loading, etc.). Everything thats basic components.|
|./src/modules/layout|here I put all components that belong to the layout of the page (Head, Main, Footer, etc.).|
