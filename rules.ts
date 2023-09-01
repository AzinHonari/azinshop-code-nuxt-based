export enum MenuDirection {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

// Here is how to deploy a Nuxt 3 project on GitHub Pages:

// How to
// Install dev dependency gh-pages  ->   npm install gh-pages --save-dev
// Add the script "deploy": "gh-pages -d dist" in package.json file

// Specifiy app baseURL in nuxt.config.ts
// Specifiy buildAssetsDir in nuxt.config.ts that doesn't start with an underscore _. See the router config example below
// app: {
//   baseURL: "/azinshop/", // baseURL: '/<repository>/'
//   buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
// },

// Create an empty file .nojekyll at the root of the project
// Generate with npm run generate
// Deploy with npm run deploy

//Deploy code to github pages
// npm run build
// create a repository in github
// cd to dist folder
// git init
// git add .
// git commit -m "first commit"
// git remote add origin http://-------
// git push -u origin master

// …or create a new repository on the command line
// echo "# azinshop" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AzinHonari/azinshop.git
// git push -u origin main

// …or push an existing repository from the command line
// git remote add origin https://github.com/AzinHonari/azinshop.git
// git branch -M main
// git push -u origin main

// *******************************************************
// create a repo in github
// cd to root
// npm run generate
// cd to dist
// git init
// git add .
// git commit -m "first commit"
// git remote add origin http://-------
// git push -u origin master
// go to github and setting for repository and add gitpages

// The code of https://azinhonari.github.io/azinshop/ based on nuxt
