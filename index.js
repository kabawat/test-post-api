const exp = require('express')
const path = require('path')
const cors = require('cors')
const app = exp();

const router = require('./router/')
app.use(exp.json())
app.use(exp.urlencoded({ extended: true }))
app.use(cors(
    { origin: ['*', 'http://127.0.0.1:5500/', "http://127.0.0.1:5500/", 'http://localhost:5500/', 'http://localhost:3000', 'http://localhost:3001'] }
))
// app.use('/user', exp.static(path.join(__dirname, 'public/user')))
app.use(router)
app.listen(80, function () {
    console.log(`http://localhost:${80}`)
})
