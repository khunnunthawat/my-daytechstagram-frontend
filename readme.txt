###
  npx create-next-app --example with-tailwindcss {{APP_NAME}}
  npm install --save-dev typescript @types/react @types/node
  npm install antd
  mkdir src
  move : folder page > src
  touch tsconfig.json
  change file : 
  src/pages/api/hello.ts
  src/pages/_app.tsx
  src/pages/index.tsx

  _app.tsx
  import 'antd/dist/antd.css';
  import 'tailwindcss/tailwind.css';

  tailwind.config.js
  module.exports = {
    mode: 'jit',
    purge: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };

  tsconfig.json
  "baseUrl": ".",
  "paths": {
    "@/components/*": ["src/components/*"]
  },
  "target": "es5",
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ],
  "allowJs": true,
  "skipLibCheck": true,
  "strict": true,
###