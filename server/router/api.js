/**
 * @author zhangyi
 * @date 2018/7/24
 */
import Router from 'koa-router'
import { signIn } from '../controllers/userCtr'

const router = new Router();

const apiRouter = router.post('/signin', signIn);

export default apiRouter;