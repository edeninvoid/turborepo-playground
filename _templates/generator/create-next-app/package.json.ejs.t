---
to: apps/<%= name %>/package.json
---
{
  "name": "<%= name %>",
  "version": "0.0.1",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@repo/ui": "workspace:*",
    "@repo/shared": "workspace:*",
    "lucide-react": "^0.475.0",
    "next": "^15.3.3",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@repo/eslint-config": "workspace:^",
    "@repo/typescript-config": "workspace:*",
    "typescript": "^5.7.3"
  }
}
