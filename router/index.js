const { Router } = require("express")
const { signup } = require("./controller/signup")
const { emailValid } = require("../middleware/email")
const { signin } = require("./controller/signin")
const profile = require("./controller/profile")
const handalCreateProduct = require("./controller/product/create")
const handleGetProduct = require("./controller/product/get_data")
const handleGetSingleProduct = require("./controller/product/get_single_product")
const handleUpdateProduct = require("./controller/product/update")
const router = Router()

router.get("/", function (req, res) {
    res.status(200).json({
        msg: 'welcome to our backend code!'
    })
})

router.post('/sign-up', emailValid, signup)
router.post('/sign-in', signin)
router.post('/profile', profile)

router.post('/product', handalCreateProduct)
router.get('/product', handleGetProduct)
router.get('/product/:productId', handleGetSingleProduct);
router.put('/product/:productId', handleUpdateProduct);


module.exports = router