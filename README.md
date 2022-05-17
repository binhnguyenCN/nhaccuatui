This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Nhaccuatui

## Usage
First, run the development server and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```bash
npm run dev
```

## Linters and Formatters
- Eslint: linter for JS
- Styleint: linter for CSS
- Prettier: formater
- Husky: git hooks
- Lint-staged: only format file changed

## Create a hook with Husky
```bash
npx husky add .husky/pre-commit "npx lint-staged"
git add .husky/pre-commit
```
