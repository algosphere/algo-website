## Versions
 - Hugo `0.61.0`
 - Bootstrap `4.4.1`
 - Bootstrap Icons `1.0.0-alpha2`
 - Material Icons `3.0.1`
 - Node.js `12.14.0`

## CI/CD
![build develop](https://github.com/algosphere/algo-website/workflows/build-develop/badge.svg?branch=develop) ![deploy preview](https://github.com/algosphere/algo-website/workflows/deploy-preview/badge.svg?branch=develop) [preview.algosphere.org](https://preview.algosphere.org/)  
![build master](https://github.com/algosphere/algo-website/workflows/build-master/badge.svg?branch=master) ![deploy production](https://github.com/algosphere/algo-website/workflows/deploy-production/badge.svg?branch=master) [algosphere.org](https://algosphere.org/)  

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
- Install [PostCSS CLI](https://github.com/postcss/postcss-cli) and [Autoprefixer](https://github.com/postcss/autoprefixer) globally: `npm i -g postcss-cli autoprefixer`
- Clone the repo and run `hugo server` from root

## Caveats
- Goldmark currently does not handle unicode characters in auto heading IDs, temporarily fix by specifying anchors IDs like so: `# Title with àccent {#title-with-accent}`. See [#6616](https://github.com/gohugoio/hugo/issues/6616).

## Related documents
- [Workshop: Algosphere Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance’s website: Git workflow](https://docs.google.com/presentation/d/1HRAely6PKDnXdPcbMXSpmX0dxytzwtd9ih9-s-rTLLg/)
