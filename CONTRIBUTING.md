# Contributing to Clarity UI

Thank you for your interest in contributing to Clarity UI! We welcome contributions from the community to help make this library better.

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/your-username/clarity-ui.git
    cd clarity-ui
    ```
3.  **Install dependencies**:
    ```bash
    bun install
    ```
4.  **Start the development server**:
    ```bash
    bun dev
    ```
    This will start the documentation site at `http://localhost:3001` and the preview site at `http://localhost:3002`.

## Development Workflow

- **Components**: The core UI components are located in `packages/ui/src/components/ui`.
- **Registry**: The registry build logic is in `packages/registry`.
- **Documentation**: The documentation site is in `apps/docs`.

### Adding a New Component

1.  Create the component file in `packages/ui/src/components/ui/[component-name].tsx`.
2.  Add the component definition to `packages/registry/src/registry.ts`.
3.  Run `bun run build` in `packages/registry` to update the registry JSON files.
4.  Export the component in `packages/ui/src/index.ts`.

## Commit Guidelines

We generally follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

## Pull Requests

1.  Create a new branch for your feature or fix.
2.  Commit your changes with descriptive messages.
3.  Push your branch to your fork.
4.  Open a Pull Request against the `main` branch of the `sh20raj/clarity-ui` repository.
5.  Ensure all checks pass (linting, build).

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
