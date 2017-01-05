/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config';

const app = express();
const port = process.env.PORT || 8080;
const compiler = webpack(config);

// It serves the files emitted from webpack over a connect server
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// Tell express the files we want to serve
// Since this is a one page app we want express to serve index.html on every request made

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './app/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
