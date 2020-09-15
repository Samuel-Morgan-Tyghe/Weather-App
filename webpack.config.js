const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
entry: './src/Typescript/index.ts',

output: {
  filename: 'js/index.min.js',
  publicPath: '/public/',
  path: path.resolve(__dirname, 'public'),
},

module: {


rules: [

  { 
    test: /\.less$/,
    use: [ 
      MiniCssExtractPlugin.loader,
      'css-loader', 
      'less-loader'
  ],
},

         {
           test: /\.tsx?$/,
           use: 'ts-loader',
           exclude: /node_modules/,
         },
        
       ],

},
  

optimization: {
  minimize: true
},

resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },




plugins: [
 

  new MiniCssExtractPlugin({

    
    filename: "/css/index.min.css",
   


  }),

],








}