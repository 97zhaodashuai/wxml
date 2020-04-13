const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path')

function getPath(rPath) {
    return path.resolve(__dirname, rPath)
}

let plugins = []
plugins = plugins.concat([
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: '../index.html'
    })
])

module.exports = {

    entry: {
        fone: './src/main.js'
    },

    output: {
        filename: '[name].js',
        publicPath: "script",
        path: getPath('./dist/script')
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets: ['stage-0']
                }
            }
            // {
            //     test: /\.html/,
            //     loader: 'html-loader'
            // },
        ]
    },
    stats: {
        modulesSort: 'size',
        chunksSort: 'size',
        assetsSort: 'size',
        children: false
    },
    plugins: plugins
    // plugins:[new HtmlWebpackPlugin()]
}