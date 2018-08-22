const merge = require('webpack-merge');
const prod = require('./webpack.prod.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin(
               {
                  analyzerMode: 'server',
                  analyzerHost: '127.0.0.1',
                  analyzerPort: 8889,
                  reportFilename: 'report.html',
                  defaultSizes: 'parsed',
                  openAnalyzer: true,
                  generateStatsFile: false,
                  statsFilename: 'stats.json',
                  statsOptions: null,
                  logLevel: 'info'
                    }
           ),
    ]
})