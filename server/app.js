/**
 * @author zhangyi
 * @date 2018/3/31
 */
import Koa from 'koa'
import path from 'path'
import config from './config/index'
import mongoose from 'mongoose'
import session from 'koa-session-minimal'
import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import views from 'koa-views'
import router from './router'

// mongoose.Promise = Promise;
// mongoose.connect(config.mongodb.url, config.mongooseOption);
// mongoose.connection.on('error', console.error);

const app = new Koa();
const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
    const webpack = require('webpack');
    const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware')
    const devWebpackConfig = require('../build/webpack.dev.config')

    const compile = webpack(devWebpackConfig)

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
    }))

    app.use(hotMiddleware(compile, {
        // log: console.log,
        // path: '/__webpack_hmr',
        // heartbeat: 10 * 1000
    }))
}

app.use(session())

app.use(bodyParser())

// 配置服务端模板渲染引擎中间件
app.use(views(path.resolve(process.cwd(), './dist/'), {
    extension: 'html',
    map: { html: 'ejs' }
}))

// 配置静态资源加载中间件
app.use(koaStatic(
    path.resolve(process.cwd(), './dist/')
))

app.use(router.routes())
    .use(router.allowedMethods())


app.listen(config.port, ()=>{
    console.log(`server listen at port ${config.port}\n`)
    console.log(`http://localhost:${config.port}\n`)
})
