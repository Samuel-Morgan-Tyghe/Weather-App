const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");


module.exports = {
  
watch: true,
devtool: 'inline-source-map',
entry: './src/Typescript',
resolve: {
  extensions: [ '.tsx', '.ts', '.js' ],
},
output: {
  filename: 'js/index.min.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'public'),
  libraryTarget: "this",


},

module: {
rules: [
         {
           test: /\.ts?$/,
           use: 'ts-loader',
           exclude: /node_modules/,
           enforce: 'pre',
         },

         {
          test: /\.js$/,
          use: ["babel-loader"],
          enforce: 'pre',
          exclude: /node_modules/,
        },
        
       ],

},
optimization: {
  minimize: false
},


plugins: [
  new SourceMapDevToolPlugin({
    filename: "[file].map"
  }),
]










}