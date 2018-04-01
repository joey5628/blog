/**
 * @author zhangyi
 * @date 2018/4/1
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    devtool: false,

    entry: {
        admin: [
            '../web/admin/index.js'
        ],
        vendor: ['react', 'react-dom', 'axios', 'classnames', 'react-router-dom']
    },

    output: {
        path: path.join(__dirname, "../dist"), // string
        // 输出解析文件的目录，url 相对于 HTML 页面
        publicPath: "/",
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: "js/[name].[chunkhash:8].js"
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: path.join(__dirname, '../web/admin/index.html'),
            alwaysWriteToDisk: true,
            title: 'admin title'
        }),
    ]
});
