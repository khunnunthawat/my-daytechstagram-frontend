###
  npminstall :
  npx create-next-app --example with-tailwindcss {{APP_NAME}}
  npm i --save-dev typescript @types/react @types/node
  npm i antd
  npm i axios
  npm i cookie-cutter
  npm i --save cookies
  npm i --save-dev @types/cookies

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

###
  Ant Design Less variables :
  @primary-color: #f759ab; // primary color for all components
  @link-color: #1890ff; // link color
  @success-color: #52c41a; // success state color
  @warning-color: #faad14; // warning state color
  @error-color: #f5222d; // error state color
  @font-size-base: 14px; // major text font size
  @heading-color: rgba(0, 0, 0, 0.85); // heading text color
  @text-color: rgba(0, 0, 0, 0.65); // major text color
  @text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
  @disabled-color: rgba(0, 0, 0, 0.25); // disable state color
  @border-radius-base: 2px; // major border radius
  @border-color-base: #d9d9d9; // major border color
  @box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers
###

###
  Customize Theme
  npm i @craco/craco --save
  touch craco.config.js
  npm i craco-less
###

###
{
  "name": "with-tailwindcss",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 8080",
    "build": "next build",
    "start": "next start -p 8080"
  },
  "dependencies": {
    "@craco/craco": "^6.1.2",
    "antd": "^4.15.5",
    "babel-plugin-import": "^1.13.3",
    "next": "latest",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "recoil": "^0.2.0"
  },
  "devDependencies": {
    "@types/node": "^15.0.3",
    "@types/react": "^17.0.5",
    "autoprefixer": "^10.0.4",
    "postcss": "^8.1.10",
    "tailwindcss": "^2.1.1",
    "typescript": "^4.2.4"
  }
}
###

###
  color : #FF647C #FDAFBB #FBE4E8
###