/**
 * @author zhangyi
 * @date 2018/4/1
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {

    mode: 'production',

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
        new MiniCssExtractPlugin({
            filename: `assets/css/${name}_[name].[hash:4].css`,
            chunkFilename: `assets/css/${name}_[id].[hash:4].css`,
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
    ]
});
