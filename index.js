const exp = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = exp();
const router = require('./router/')
// app.use(exp.json())
// app.use(exp.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
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
