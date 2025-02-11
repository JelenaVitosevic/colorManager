# Color Management App

A simple React application for managing color definitions.

## Features

- List all colors
- Create new colors
- Delete colors
- Filter colors
- Each color has a name and hex value

## Tech Stack

- React with TypeScript
- Vite
- Tailwind CSS
- JSON Server for mock API
- Axios for API calls
- ESLint & Prettier for code formatting

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the JSON Server (mock API):

```bash
npm run server
```

This will start the mock API server on http://localhost:3001

3. In a new terminal, start the development server:

```bash
npm run dev
```

## API Endpoints

The following endpoints are available:

- GET /colors - Get all colors
- POST /colors - Create a new color
- DELETE /colors/:id - Delete a color
- GET /colors?name_like=:query - Filter colors by name

## Development

- Run `npm run lint` to check for linting issues
- Run `npm run format` to format code using Prettier

## VS Code Setup

The project includes VS Code settings for optimal development experience:

- Automatic formatting on save is enabled
- Prettier is set as the default formatter
- ESLint is configured to run on save

These settings are defined in the .vscode folder and will be automatically applied when you open the project in VS Code.

## Code Style

- The project uses Prettier for code formatting with trailing commas set to "es5"
- ESLint is configured to enforce TypeScript and React best practices
- Format and lint scripts are available:
  - `npm run format` - Format all files
  - `npm run format:check` - Check formatting without making changes
  - `npm run lint` - Check for linting issues
  - `npm run lint:fix` - Automatically fix linting issues where possible
