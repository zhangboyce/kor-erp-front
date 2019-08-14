'use strict';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        publicPath: "http://localhost:8080/public",
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name].min.js'
    },
    devServer: {
        contentBase: './app',
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less|\.css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.svg|\.ttf|\.otf|\.jpg|\.png|\.gif/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                context: path.resolve(__dirname, 'app/'),
                from: path.resolve(__dirname, 'app/index.html'),
                to: path.resolve(__dirname, 'dist/index.html'),
            },
            {
                context: path.resolve(__dirname, 'app/'),
                from: path.resolve(__dirname, 'app/component/**/*.html'),
                to: path.resolve(__dirname, 'dist/'),
            },
        ]),
    ]
};