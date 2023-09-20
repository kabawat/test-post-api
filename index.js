const exp = require('express')
const path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = exp();

const router = require('./router/')
// app.use(exp.json())
// app.use(exp.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(
    { origin: ['*', 'http://127.0.0.1:5500/', "http://127.0.0.1:5500/", 'http://localhost:5500/'] }
))
app.use(fileUpload())
// app.use('/user', exp.static(path.join(__dirname, 'public/user')))
app.use(router)


app.post('/login', function (req, res) {
    const num = Math.random()
    const token = Math.floor(num * 1000000)
    res.status(200).json({
        message: "Data submit success...",
        status: true,
        token: token
    })
})

app.listen(80, function () {
    console.log(`http://localhost:${80}`)
})
