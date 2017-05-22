const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const uglifyPlugin = require("uglifyjs-webpack-plugin");

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'output.js'
    },
    module: {
        rules: [{
            test: '/\.js$/', // files ending with .js
            exclude: '/node_modules/', // exclude the node_modules directory
            loader: "babel-loader" // use this (babel-core) loader
        },
        {
            test: /\.scss$/,
            exclude: '/node_modules/', // exclude the node_modules directory
            use: ExtractTextWebpackPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer : {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'eval-source-map'


}

module.exports = config;