/**
 * @author zhangyi
 * @date 2018/3/31
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const contextPath = path.join(__dirname, '../web');
const nodeModules = path.join(__dirname, '../node_modules');

function resolve(dir) {
    return path.join(__dirname, '../web/', dir)
}

const devMode = process.env.NODE_ENV === 'development';

let cssLoader = [
    { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
    { loader: 'css-loader' },
    {
        loader: 'postcss-loader',
        options: {
            config: {
                path: path.join(__dirname, '../build/postcss.config.js')
            }
        }
    }
];
const lessLoader = cssLoader.concat({ loader: 'less-loader'});


module.exports = {
    context: contextPath,

    resolve: {
        // 解析模块时应该搜索的目录
        modules: [
            'node_modules',
            contextPath
        ],

        // 自动解析确定的扩展
        extensions: ['.js', '.jsx', '.json'],

        // 别名
        alias: {
            '@adminComponents': resolve('admin/components/'),
            '@adminAssets': resolve('admin/assets/')
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: contextPath,
                exclude: nodeModules,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                // exclude: nodeModules,
                use: cssLoader
            },
            {
                test: /\.less$/,
                exclude: nodeModules,
                use: lessLoader
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ],

    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: path.join(__dirname, '../web/admin/index.html'),
            alwaysWriteToDisk: true,
            title: 'admin title'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new webpack.NoEmitOnErrorsPlugin(),
    ],

    optimization: {
        minimizer: devMode ? [] : [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    }
};