/**
 * @author zhangyi
 * @date 2018/7/24
 */
import Router from 'koa-router'
import apiRouter from './api'
import pageRouter from './page'

const router = new Router()

router.use('/api', apiRouter.routes())
router.use('/', pageRouter.routes())

export default router
