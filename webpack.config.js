'use strict';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", './app/index.js'],
    output: {
        publicPath: "http://localhost:8080/public",
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.min.js'
    },
    devServer: {
        contentBase: './app',
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        plugins: ['transform-decorators-legacy', 'transform-runtime' ],
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"},
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            modifyVars: {
                                'primary-color': 'rgb(39, 153, 158)',
                                'link-color': 'rgb(39, 153, 158)',
                            }
                        }
                    }
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