## Versions
 - Hugo `0.63.2`
 - Bootstrap `4.4.1`
 - Node.js `12.14.0`

## CI/CD
![ci-cd-develop](https://github.com/algosphere/algo-website/workflows/ci-cd-develop/badge.svg?branch=develop) [preview.algosphere.org](https://preview.algosphere.org/)  
![ci-cd-master](https://github.com/algosphere/algo-website/workflows/ci-cd-master/badge.svg?branch=master) [algosphere.org](https://algosphere.org/)  

## To develop locally
- Install the corresponding version of [Hugo](https://gohugo.io/)
- Install the corresponding version of [Node.js via nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
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
- On Windows: set `HUGO_DISABLEALIASES` environment variable to `true` and restrat computer.
- Clone the repo and run `npm start` from root

## Related documents
- [Workshop: Algosphere Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance’s website: Git workflow](https://docs.google.com/presentation/d/1HRAely6PKDnXdPcbMXSpmX0dxytzwtd9ih9-s-rTLLg/)
