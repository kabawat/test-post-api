const exp = require('express')
const cors = require('cors')
const app = exp();

app.use(exp.json())
app.use(exp.urlencoded({ extended: true }))
app.use(cors())

app.post('/login', function (req, res) {
    const num = Math.random()
    const token = Math.floor(num * 1000000)
    res.status(200).json({
        message: "Data submit success...",
        status: true,
        token: token
    })
})

app.listen(8080, function () {
    
})
