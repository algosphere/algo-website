### CI status
![CI status on branch develop](https://github.com/algosphere/algo-website/workflows/CI/badge.svg?branch=develop) *(develop)*  
![CI status on branch master](https://github.com/algosphere/algo-website/workflows/CI/badge.svg?branch=master) *(master)*  

### Versions
 - Hugo `0.61.0`
 - Bootstrap `4.4.1`
 - Bootstrap Icons `1.0.0-alpha2`

### To develop locally
- Install [Hugo](https://gohugo.io/)
- Install [Node.js](https://nodejs.org/)
- Install `PostCSS CLI` and `Autoprefixer` globally: `npm i -g postcss-cli autoprefixer`
- Clone the repo and run `hugo server` from root

### Caveats
- Goldmark currently does not handle unicode characters in auto heading IDs, temporarily fix by specifying anchors IDs like so: `# Title with àccent {#title-with-accent}`. See [#6616](https://github.com/gohugoio/hugo/issues/6616).

### Workshop
- [Workshop: Algosphere Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
