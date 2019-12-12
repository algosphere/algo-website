# Versions
 - Framework `...`
 - Hugo `0.61.0`
 - Bootstrap `4.4.1`

# To develop locally
- install [Hugo](https://gohugo.io/)
- install [Node.js](https://nodejs.org/)
- install `PostCSS CLI` and `Autoprefixer` globally: `npm i -g postcss-cli autoprefixer`
- clone repo and run `hugo server` from root

# Caveats
- Goldmark (the new Hugo Markdown renderer) currently does not handle accentuated anchor words in headings/tables of content, temporarily fix by specifying anchors IDs like so: `# Title with àccent {#title-with-accent}`. See [#56](https://github.com/yuin/goldmark/issues/56)

# Related documents
- [Revamping the Algosphere Alliance website](https://docs.google.com/document/d/1231SV9wiBthu9RE9jUw0aWxvk8YMoSorLfVJ-QuDJS8/)
- [Creating a framework for easy cross-fertilization between progressivists organizations](https://docs.google.com/document/d/1EHM7Vvi4oej-1CjVnYdGIjzA_Q9tTfixmHjHLoURwA4/)
- [AlgoConseil : framework](https://docs.google.com/document/d/1nKYvMDyhSmAe5OyBd4dJvQtxmGTzLTT3IX4xPESwn6Y/edit)
- [Workshop: Alliance’s website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)

# To do
- Add projects (see [Projets Algosphère](https://docs.google.com/document/d/1WVUMB2dK3zIbraIyTDNw0D3bo7oPNZGwPbkN7e3cu4c/)).
- Goldmark: handle Unicode anchors, see [#56](https://github.com/yuin/goldmark/issues/56).
- Goldmark: create an extension to handle french typo (non-breaking spaces), for now it is temporarily fixed at production build time with Gulp.
- Implement [Netlify CMS](https://www.netlifycms.org/).
