const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  webpack: (config) => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      )
    }    

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'networkFirst',
          urlPattern: /^https?.*/
        }]
      })
    )

    return config
  }
}