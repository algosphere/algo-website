# Versions
 - Hugo `0.61.0`
 - Bootstrap `4.4.1`

# To develop locally
- Install [Hugo](https://gohugo.io/)
- Install [Node.js](https://nodejs.org/)
- Install `PostCSS CLI` and `Autoprefixer` globally: `npm i -g postcss-cli autoprefixer`
- Clone the repo and run `hugo server` from root

# Caveats
- Goldmark (the new Hugo Markdown renderer) currently does not handle accentuated anchor words in headings/tables of content, see [#56](https://github.com/yuin/goldmark/issues/56). Temporarily fix by specifying anchors IDs like so: `# Title with àccent {#title-with-accent}`.

# Workshop
- [Workshop: Algosphere Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
