## To develop locally
1. Clone the repository.
2. Setup [Hugo](https://gohugo.io/) (see version in [`.github/workflows/deploy-main.yml`](/.github/workflows/deploy-main.yml)).
3. Setup [Node.js](https://nodejs.org/) (see version in [`.github/workflows/deploy-main.yml`](/.github/workflows/deploy-main.yml)), for example via NVS :
    1. Setup [NVS](https://github.com/jasongin/nvs).
    2. Run `nvs auto` from the project's root directory, and then run it again everytime you open the project.
    3. (optional) If you don't want to run `nvs auto` everytime you open the project, run `nvs link`.
5. Run `npm run dev` from the project's root directory to start the development server.

### To enable local CMS
Change (do not commit) `local_backend` to `true` in [`static/edit/config.yml`](./static/edit/config.yml)

## Related documents
- [Workshop: Algosphere Alliance's website](https://docs.google.com/document/d/1nXhrGaih0b8pFP8Ucf730qY53uq6WcF2PzS4Bp4ynPM/)
- [Algosphere Alliance's website: Git & GitHub workflow](https://docs.google.com/presentation/d/e/2PACX-1vQ8a_SuCwfdwo3vQfkTxA5VQKzUnSrmZOd0PrX_fnK4W7xoKqxdiKmjVs5XXt7hfAsCUtsa2j0F_zZd/pub)
