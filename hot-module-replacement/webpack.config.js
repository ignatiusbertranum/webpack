const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',    
    entry:  {
        app: './index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
    output: {
        filename: '[name].bundle.js',        
        publicPath: 'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}