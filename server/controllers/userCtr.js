/**
 * @author zhangyi
 * @date 2018/7/24
 */
import jwt from 'jsonwebtoken'
import User from '../models/userModel'
import config from '../config'


export async function signIn(ctx) {
    const { username, password } = ctx.request.body;

    await User.findOne({
        username
    }, function(err, user) {
        if (err) {
            ctx.body = {
                code: 500,
                message: err,
            }
        }
        if (user) {
            if (password === user.password) {
                ctx.session.user = {
                    username
                };

                const exp = Math.floor(Date.now() / 1000)  + (60 * 60)

                const token = jwt.sign({
                    uid: user.id,
                    username: user.username
                }, config.jwt.secretKey, {
                    expiresIn: exp
                })

                console.log('token:', token)

                ctx.cookie.set('token', token, {
                    maxAge: 24 * 60 * 60,
                    expires: exp,   // 过期时间
                    httpOnly: true,
                    overwrite: false
                })
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
