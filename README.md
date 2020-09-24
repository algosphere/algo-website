## To develop locally
- Install [Hugo](https://gohugo.io/getting-started/installing#binary-cross-platform) (see version in [workflow file](/.github/workflows/ci-cd-develop.yml#L10))
- Install [Node.js via nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (see version in [workflow file](/.github/workflows/ci-cd-develop.yml#L11))
  - On Windows:
    - Install [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
    - Run `nvm install [Node.js version]` (in an Admin shell)
    - Run `nvm use [Node.js version]` (in an Admin shell)
  - On OSX and Linux:
    - Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
    - Run `nvm install [Node.js version]`
    - Run `nvm use [Node.js version]`
- Install dependencies: `npm i`
- Install [gulp-cli](https://www.npmjs.com/package/gulp-cli), [PostCSS](https://postcss.org/), [PostCSS CLI](https://github.com/postcss/postcss-cli), [Autoprefixer](https://github.com/postcss/autoprefixer) and [Netlify CLI](https://docs.netlify.com/cli/get-started/) globally: `npm i -g postcss postcss-cli autoprefixer gulp-cli netlify-cli`
- Clone the repo and run `npm run start` from root

## Related documents
- [Workshop: Algosphere Alliance's website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance's website: Git & GitHub workflow](https://docs.google.com/presentation/d/e/2PACX-1vQ8a_SuCwfdwo3vQfkTxA5VQKzUnSrmZOd0PrX_fnK4W7xoKqxdiKmjVs5XXt7hfAsCUtsa2j0F_zZd/pub)
