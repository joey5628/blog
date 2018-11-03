import Router from 'koa-router'

const router = new Router();

const pageRouter = router
    .get('/', async (ctx) => {
        await ctx.render('blog', {
            title: 'blog'
        })
    })
    .get('admin', async (ctx) => {
        await ctx.render('admin', {
            title: '博客后台'
        });
    })
    .get('admin/*', async (ctx) => {
        console.log('---------------111----')
        await ctx.render('admin', {
            title: '博客后台'
        });
    })
    .get('login', async (ctx) => {
        await ctx.render('admin', {
            title: '登录博客后台'
        })
    })


export default pageRouter;
