import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  contentBase: './app',
  plugins: [
    // Generates Hot Update Chunks of each chunk in the records.
    new webpack.HotModuleReplacementPlugin(),

    // this ensures the emmiting stage is skipped once an error is encountered during compiling
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      },
      {
        test: /\.css/,
        loaders: ['style', 'css']
      }
    ]
  }
};
