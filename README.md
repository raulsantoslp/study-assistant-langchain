# AI Study Assistant (TypeScript + LangChain)

Local app to summarize PDFs and generate interactive quizzes using LangChain.

## Quick start

1. Create a `.env` file at the project root:

```
OPENAI_API_KEY=your_openai_api_key_here
```

2. Install deps:

```
npm install
```

3. Run minimal example:

```
npm run dev:example
```

## Scripts

- `dev`: Run `src/index.ts` in watch mode
- `dev:example`: Run `src/examples/minimal.ts`
- `build`: TypeScript build to `dist/`
- `start`: Run built app
- `typecheck`: Strict type checks

## Project structure

- `src/config/env.ts`: `.env` loader and validation
- `src/examples/minimal.ts`: Minimal LangChain example
- `src/` (future): loaders, RAG pipeline, memory, quiz generation


