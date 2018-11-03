/**
 * @author zhangyi
 * @date 2018/3/31
 */

module.exports = {
    port: process.env.PORT || 5555,
    mongodb: {
        // url: 'mongodb://root:root@127.0.0.1:27017/blog',
        url: 'mongodb://localhost:27017/blog'
    },
    mongooseOption: {
        // authSource: "admin",
        // useMongoClient: true
    },
    jwt: {
        secretKey: 'secretKey'
    }
};