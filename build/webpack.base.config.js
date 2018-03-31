/**
 * @author zhangyi
 * @date 2018/3/31
 */
const path = require('path');
const contextPath = path.join(__dirname, '../web');
const nodeModules = path.join(__dirname, '../node_modules');

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

console.log('cssLoader:', cssLoader);

// const lessLoader = [
//     { loader: 'style-loader' },
//     { loader: 'css-loader' },
//     {
//         loader: 'postcss-loader',
//         options: {
//             config: {
//                 path: './postcss.config.js'
//             }
//         }
//     },
//     { loader: 'less-loader'}
// ];

const lessLoader = cssLoader.concat({ loader: 'less-loader'});

console.log('lessLoader:', lessLoader);

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
                exclude: nodeModules,
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
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ],

        // noParse: ''
    }
};