const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // Aquí van los loaders
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]           
            }
        ]        
    },
    plugins: [
        // Aquí van los plugins
        new MiniCssExtractPlugin({
            filename: "css/styles.css",
            chunkFilename: "[id].css"
        })
    ]
}