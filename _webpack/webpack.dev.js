const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 9000,
    hot: true,
    proxy: {
      '/currentExchangeRates': 'http://localhost:5000',
      '/currentCurrencies': 'http://localhost:5000',
    },
  },
  devtool: 'inline-source-map',
});