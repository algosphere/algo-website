## To develop locally
- Install [Hugo](https://gohugo.io/) (see version in [workflow file](/.github/workflows/ci-cd-source.yml))
- Install [Node.js via nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (see version in [workflow file](/.github/workflows/ci-cd-source.yml))
  - On Windows:
    - Install [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
    - Run `nvm install [Node.js version]` (in an Admin shell)
    - Run `nvm use [Node.js version]` (in an Admin shell)
  - On OSX and Linux:
    - Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
    - Run `nvm install [Node.js version]`
    - Run `nvm use [Node.js version]`
- Install dependencies: `npm i`
- Install [Netlify CLI](https://docs.netlify.com/cli/get-started/), [gulp-cli](https://www.npmjs.com/package/gulp-cli), [PostCSS CLI](https://github.com/postcss/postcss-cli) and [Autoprefixer](https://github.com/postcss/autoprefixer) globally: `npm i -g netlify-cli gulp-cli postcss-cli autoprefixer`
- Clone the repo and run `npm start` from root

## Related documents
- [Workshop: Algosphere Alliance's website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance's website: Git & GitHub workflow](https://docs.google.com/presentation/d/1HRAely6PKDnXdPcbMXSpmX0dxytzwtd9ih9-s-rTLLg/)
