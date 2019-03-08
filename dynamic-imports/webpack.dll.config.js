const path = require('path');
const webpack=require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        modules: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        // Aquí van los plugins
        new webpack.DllPlugin({ 
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
}