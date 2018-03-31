/**
 * @author zhangyi
 * @date 2018/3/31
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpackBaseConfig = require('./webpack.base.config');

console.log('__dirname:', __dirname);

module.exports = merge(webpackBaseConfig, {
    entry: {
        admin: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            '../web/admin/index.js'
        ],
        // vendor: ['react', 'react-dom', 'axios', 'classnames', "moment", "react-router-dom"]
    },

    output: {
        path: path.join(__dirname, "../dist"), // string
        filename: '[name].js',
        // 输出解析文件的目录，url 相对于 HTML 页面
        publicPath: "/"
    },

    devtool: 'source-map',

    plugins: [

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
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ]
});