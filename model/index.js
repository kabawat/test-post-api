const mongoose = require('mongoose')
const DB_URL = `mongodb+srv://QueryBoat:ty9we3ys86@queryboat.04hkymt.mongodb.net/backenddev`
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
}).then(() => {
    console.log('connect')
}).catch(error => {
    console.log(error)
})

const userSchema = new mongoose.Schema({
    usernmae: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
})

const userModal = new mongoose.model('userlist', userSchema)
module.exports = { userModal }