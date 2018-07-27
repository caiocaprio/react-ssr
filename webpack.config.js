const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const package = require('./package.json');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist')
};

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const browserConfig = {
    entry: PATHS.src + '/browser/index.js',
    output: {
        path: PATHS.dist,
        filename: 'app.js',
        publicPath: '/'
    },
    devtool: 'eval',
    resolve: {
        modules: [path.join(__dirname, './node_modules'), path.join(__dirname, './src')],
        extensions: ['.js', '.jsx', '.jsm', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false,
                                minimize: true
                                // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react-app']
                }
            },
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            // define where to save the file
            filename: 'css/main.css',
            allChunks: true
        })
    ]
};

const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: 'css-loader/locals'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jsx||js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react-app']
                }
            }
        ]
    }
};

module.exports = [browserConfig, serverConfig];
