/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.js",
    "./src/pages/Home.js",
    "./src/pages/login.js",
  ],
  theme: {
    fontFamily: {
      'logo':['PlusJakartaSans'],
      'body':['Lato']
    },
    extend:{},
  },
  plugins: [],
}

