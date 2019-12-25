## Versions
 - Hugo `0.61.0`
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
- Install [gulp-cli](https://www.npmjs.com/package/gulp-cli), [PostCSS CLI](https://github.com/postcss/postcss-cli) and [Autoprefixer](https://github.com/postcss/autoprefixer) globally: `npm i -g gulp-cli postcss-cli autoprefixer`
- Clone the repo and run `npm start` from root

## Caveats
- Goldmark currently does not handle unicode characters in auto heading IDs: temporarily fix by specifying anchors IDs like so: `# Title with àccent {#title-with-accent}`. See [#6616](https://github.com/gohugoio/hugo/issues/6616).
- Using `{{ .Content | .RenderString }}` (in templates) in replacement of `{{ .Inner | markdownify }} (in shortcodes) ` causes markup to break: temporarily fix by removing indentation in shortcodes. See [questions-about-renderstring](https://discourse.gohugo.io/t/questions-about-renderstring/).
- Scheduled CI/CD is only possible on default branch for now, that's why the default branch is currently set to *master* (it should be *develop*). See [Scheduled-workflows-custom-branch-workaround](https://github.community/t5/GitHub-Actions/Scheduled-workflows-custom-branch-workaround/m-p/41975).

## Related documents
- [Workshop: Algosphere Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance’s website: Git workflow](https://docs.google.com/presentation/d/1HRAely6PKDnXdPcbMXSpmX0dxytzwtd9ih9-s-rTLLg/)
