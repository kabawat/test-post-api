const { Router } = require("express")
const { signup } = require("./controller/signup")
const { emailValid } = require("../middleware/email")
const router = Router()

router.get("/", function (req, res) {
    res.status(200).json({
        msg: 'welcome to our backend code!'
    })
})

router.post('/sign-up', emailValid, signup)
module.exports = router