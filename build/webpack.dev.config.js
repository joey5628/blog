/**
 * @author zhangyi
 * @date 2018/3/31
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(webpackBaseConfig, {
    entry: {
        admin: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            '../web/admin/index.js'
        ],
        vendor: ['react', 'react-dom', 'axios', 'classnames', 'react-router-dom']
    },

    output: {
        path: path.join(__dirname, "../dist"), // string
        // 输出解析文件的目录，url 相对于 HTML 页面
        publicPath: "/",
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },

    devtool: 'source-map',

    plugins: [

        // new ExtractTextPlugin('css/[name].[contenthash:8].css'),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: path.join(__dirname, '../web/admin/index.html'),
            alwaysWriteToDisk: true,
            title: 'admin title'
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ]
});