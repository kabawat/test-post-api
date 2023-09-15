const jwt = require('jsonwebtoken')
const { userModal } = require('../../../model')
module.exports.signin = async (req, res) => {
    const { email, username, password } = req.body
    try {
        if (!username && !email) {
            throw new Error('please Enter Username or email')
        }
        if (!password) {
            throw new Error('please Enter a password')
        }

        let isExist;
        if (username) {
            isExist = await userModal.findOne({ username: username, pwd: password })

        } else {
            isExist = await userModal.findOne({ email: email, pwd: password })
        }

        if (!isExist) {
            throw new Error('invalid credentials')
        }
        
        const token = jwt.sign({ username: isExist?.username }, 'alsdkfj09e029309234')


        res.status(200).json({
            message: 'authentication successful!',
            status: true,
            data: {
                token
            }
        })

    } catch (error) {
        res.status(401).json({
            message: error?.message,
            status: false,
        })
    }
}
