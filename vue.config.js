const webpack = require('webpack');
const path = require('path');
const SRC_PATH = path.resolve(__dirname, './src');
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': SRC_PATH,
        'src': SRC_PATH,
        'styles': SRC_PATH + '/assets/styles',
        'images': SRC_PATH + '/assets/images',
        'styles': SRC_PATH + '/assets/styles',
        'components': SRC_PATH + '/components',
        'common': SRC_PATH + '/common'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        configCommon: [path.resolve(SRC_PATH, 'common/constant.js'), 'default']
      }),
      new webpack.DefinePlugin({
        'sceneParams':JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }

}