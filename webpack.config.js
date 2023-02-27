const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] // include eslint-loader
            },
            {
                test: /\.(sass|less|css)$/,
                use: ["style-loader", "css-loader", 'sass-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        })
    ]
};