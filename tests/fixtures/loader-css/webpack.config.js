var HardSourceWebpackPlugin = require('../../..');
var webpackVersion = require('webpack/package.json').version;

var moduleOptions;

if (Number(webpackVersion.split('.')[0]) > 1) {
  moduleOptions = {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  };
}
else {
  moduleOptions = {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  };
}

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname + '/tmp',
    filename: 'main.js',
  },
  module: moduleOptions,
  plugins: [
    new HardSourceWebpackPlugin({
      cacheDirectory: 'cache',
    }),
  ],
};
