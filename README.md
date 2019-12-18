## Versions
 - Hugo `0.61.0`
 - Bootstrap `4.4.1`

## CI/CD
![build develop](https://github.com/algosphere/algo-website/workflows/build-develop/badge.svg?branch=develop) ![deploy preview](https://github.com/algosphere/algo-website/workflows/deploy-preview/badge.svg?branch=develop)  
![build master](https://github.com/algosphere/algo-website/workflows/build-master/badge.svg?branch=master) ![deploy production](https://github.com/algosphere/algo-website/workflows/deploy-production/badge.svg?branch=master) 

## To develop locally
- Install [Hugo](https://gohugo.io/)
- Install [Node.js](https://nodejs.org/)
- Install `PostCSS CLI` and `Autoprefixer` globally: `npm i -g postcss-cli autoprefixer`
- Clone the repo and run `hugo server` from root

## Caveats
- Goldmark currently does not handle unicode characters in auto heading IDs, temporarily fix by specifying anchors IDs like so: `# Title with àccent {#title-with-accent}`. See [#6616](https://github.com/gohugoio/hugo/issues/6616).

## Related documents
- [Workshop: Algosphere Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance’s website: Git workflow](https://docs.google.com/presentation/d/1HRAely6PKDnXdPcbMXSpmX0dxytzwtd9ih9-s-rTLLg/edit?usp=sharing)
