const mongoose = require('mongoose')
const DB_URL = `mongodb+srv://QueryBoat:ty9we3ys86@queryboat.04hkymt.mongodb.net/e-com`
// const DB_URL = `mongodb://0.0.0.0:27017/e-com`
function connect_db() {
    try {
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 30000,
        }).then(() => {
            console.log('connect')
        }).catch(error => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports= connect_db