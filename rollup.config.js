// rollup.config.js
import sass from "rollup-plugin-sass";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";
import copy from 'rollup-plugin-copy';
import cleaner from 'rollup-plugin-cleaner';

export default {
  input: "src/index.js",
  output: {
    file: ".build/sparker.js",
    format: "umd",
    name: "Sparker"
  },
  plugins: [
    cleaner({
      targets: [
        './.build/'
      ]
    }),
    sass({ insert: true }), // Put css into HTML file via JS
    resolve(), // Follow modules
    commonjs(), // Convert module.exports to es6 export
    babel({ // ES5 conversion 
      exclude: "node_modules/**" // only transpile our source code
    }),
    uglify(), // Minify code
    copy({
      "src/fonts": ".build/fonts"
    })
  ]
};
