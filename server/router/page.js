import Router from 'koa-router'
import { pageVerify } from "../middleware/verify"

const router = new Router()

const pageRouter = router
    .get('/', async (ctx) => {
        await ctx.render('blog', {
            title: 'blog'
        })
    })
    .get('admin', pageVerify, async (ctx) => {
        await ctx.render('admin', {
            title: '博客后台'
        })
    })
    .get('admin/*', pageVerify, async (ctx) => {
        await ctx.render('admin', {
            title: '博客后台'
        })
    })
    .get('login', async (ctx) => {
        await ctx.render('admin', {
            title: '登录博客后台'
        })
    })


export default pageRouter;
