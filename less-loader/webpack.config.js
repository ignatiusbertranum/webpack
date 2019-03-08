const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", path.resolve(__dirname, './src/js/index.js')],
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
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:['@babel/preset-env','@babel/react']
                    }
                }
            },            
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 120000
                    }
                }
            },
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]           
            },
            {				
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
            },
            {				
				test: /\.styl$/,
				use: [
					MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "stylus-loader",
                        options: {
                            use: [
                                require('nib'),
                                require('rupture')
                            ],
                            import: [
                                '~nib/lib/nib/index.styl',
                                '~rupture/rupture/index.styl'
                            ]
                        }
                    }					
				]
            },
            {				
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
                    "css-loader", 
                    {
                        loader: "less-loader",
                        options: {
                            noIeCompat: true
                        }
                    }
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