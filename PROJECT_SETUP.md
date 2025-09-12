# Portfolio Project - Complete Setup Guide

This guide contains all the files and code needed to recreate this portfolio project locally.

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Instructions

1. Create a new directory for your project:
```bash
mkdir portfolio-project
cd portfolio-project
```

2. Initialize the project:
```bash
npm create vite@latest . -- --template react-ts
```

3. Install additional dependencies:
```bash
npm install @supabase/supabase-js lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Replace the generated files with the code provided below
5. Run the development server:
```bash
npm run dev
```

## File Structure
```
portfolio-project/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## Deployment
To deploy to Netlify or other platforms:
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider