const { Router } = require("express")
const { signup } = require("./controller/signup")
const { emailValid } = require("../middleware/email")
const { signin } = require("./controller/signin")
const profile = require("./controller/profile")
const router = Router()

router.get("/", function (req, res) {
    res.status(200).json({
        msg: 'welcome to our backend code!'
    })
})

router.post('/sign-up', emailValid, signup)
router.post('/sign-in', signin)
router.post('/profile', profile)
module.exports = router