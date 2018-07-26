/**
 * @author zhangyi
 * @date 2018/7/24
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    nickname: String,
    password: String,
    email: String,
});

export default mongoose.model('User', UserSchema)