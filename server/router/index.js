/**
 * @author zhangyi
 * @date 2018/7/24
 */
import Router from 'koa-router'
import apiRouter from './api'

const router = new Router();

router.use('/api', apiRouter.routes());

export default router;