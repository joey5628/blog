/**
 * @author zhangyi
 * @date 2018/7/24
 */
import User from '../models/userModel'


export async function signIn(ctx) {
    const { username, password } = ctx.request.body;

    await User.findOne({
        username
    }, 'username password', function(err, result) {
        console.log('signIn err:', err)
        console.log('signIn result:', result)

        if (err) {
            ctx.body = {
                code: 500,
                message: err,
            }
        }
        if (result) {
            console.log(111)
            if (password === result.password) {
                console.log(222)
                ctx.session.user = {
                    username
                };
                ctx.body = {
                    code: 0,
                    message: '登录成功'
                }
            } else {
                ctx.body = {
                    code: 0,
                    message: '密码错误'
                }
            }
        } else {
            ctx.body = {
                code: 0,
                message: '用户不存在'
            }
        }
    })
}
