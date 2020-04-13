const webpack = require('webpack')
const path = require('path')


function getPath (rPath) {
    return path.resolve(__dirname, rPath)
}


module.exports = {

    entry:{
        fone: './index.js'
    },

    output:{
        filename:'[name].js',
        publicPath: "script",
        path: getPath('./dist')
    },
    devtool: 'inline-source-map',
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node-modules/',
                query:{
                    presets:['stage-0']
                }
            }
        ]
    }
}