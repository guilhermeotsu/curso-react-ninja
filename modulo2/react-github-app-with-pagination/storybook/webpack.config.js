'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config')
const path = require('path')

const common = require('./../webpack/common')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  // Configurando para que o Storybook reconheça Module CSS
  newConfig.module.loaders = (newConfig.module.loaders || []).map((loader) => {
    // Loader de css (fazer funcionar com Module CSS)
    if (loader.test.test('actions.css')) {
      return {
        ...loader,
        loaders: loader.loaders.map((internalLoader) => {
          return internalLoader.includes('/css-loader')
            ? `${internalLoader}&modules`
            : internalLoader
        })
      }
    }
    return loader
  })

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(common.standardPreLoader) 

  newConfig.resolve = common.resolve

  return newConfig
}
