/**
 * @author zhangyi
 * @date 2018/3/31
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(webpackBaseConfig, {

    mode: 'development',

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

    devtool: '#source-map',

    plugins: [
        new HtmlWebpackHarddiskPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.OccurrenceOrderPlugin(),\
    ]
});