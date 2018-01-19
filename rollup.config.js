// rollup.config.js
import sass from "rollup-plugin-sass";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "build/sparker.js",
    format: "umd",
    name: "Sparker"
  },
  plugins: [
    sass({ insert: true }), // Put css into HTML file via JS
    resolve(), // Follow modules
    commonjs(), // Convert module.exports to es6 export
    babel({ // ES5 conversion 
      exclude: "node_modules/**" // only transpile our source code
    }),
    uglify() // Minify code
  ]
};
