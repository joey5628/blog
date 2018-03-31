/**
 * @author zhangyi
 * @date 2018/3/31
 */
import koa from 'koa'
import config from './config/index'

const app = new koa();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    const webpack = require('webpack');
    const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
    const devWebpackConfig = require('../build/webpack.dev.config');

    const compile = webpack(devWebpackConfig);

    app.use(devMiddleware(compile, {
        // display no info to console (only warnings and errors)
        noInfo: false,

        // display nothing to the console
        quiet: false,

        // switch into lazy mode
        // that means no watching, but recompilation on every request
        lazy: false,

        // watch options (only lazy: false)
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },

        // public path to bind the middleware to
        // use the same as in webpack
        publicPath: devWebpackConfig.output.publicPath,

        // custom headers
        headers: { "X-Custom-Header": "yes" },

        // options for formating the statistics
        stats: {
            colors: true
        }
    }));

    app.use(hotMiddleware(compile, {
        // log: console.log,
        // path: '/__webpack_hmr',
        // heartbeat: 10 * 1000
    }))
}

app.listen(config.port, ()=>{
    console.log(`server listen at port ${config.port}`)
});