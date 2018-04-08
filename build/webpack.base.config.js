/**
 * @author zhangyi
 * @date 2018/3/31
 */
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const contextPath = path.join(__dirname, '../web');
const nodeModules = path.join(__dirname, '../node_modules');

function resolve(dir) {
    return path.join(__dirname, '../web/', dir)
}

let cssLoader = [
    { loader: 'style-loader' },
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
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, '../build/postcss.config.js')
                            }
                        }
                    }
                ]
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

        // noParse: ''
    },

    // plugins: [
    //     new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    // ]
};