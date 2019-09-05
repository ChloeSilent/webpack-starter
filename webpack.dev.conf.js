
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    port: 8081,
    devServer: {
        warnings: false,
        errors: true
    },
    plugins: [
        new baseWebpack.SourceMapDEvToolPlugin
    ]
})


module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})