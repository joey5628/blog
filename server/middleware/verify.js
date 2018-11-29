import jwt from 'jsonwebtoken'
import config from '../config/'

export async function apiVerify (ctx, next) {
    const token = ctx.cookies.get('token')
    if (token === '') {
        ctx.throw(401, '请先登录')
    }
    try {
        jwt.verify(token, config.jwt.secretKey)
    } catch(err) {
        ctx.throw(401, 'invalid token')
    }

    await next()
}

export async function pageVerify (ctx, next) {
    const token = ctx.cookies.get('token')
    const url = ctx.url,
        adminReg = /admin/g

    if (adminReg.test(url)) {
        if (token === '') {
            ctx.redirect('/login')
        }

        try {
            jwt.verify(token, config.jwt.secretKey)
        } catch(err) {
            ctx.redirect('/login')
        }
    }

    await next()
}