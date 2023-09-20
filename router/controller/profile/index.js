const jwt = require('jsonwebtoken')

const { userModal } = require('../../../model')
async function profile(req, res) {
    try {
        const { token } = req.body

        const isToken = jwt.verify(token, 'alsdkfj09e029309234')
        if (!isToken?.username) {
            throw new Error('invalid token')
        }
        const isExist = await userModal.findOne({ username: isToken?.username, token: token })
        if (!isExist) {
            throw new Error('data not Found')
        }

        res.status(200).json({
            message: 'authentication successful!',
            status: true,
            data: {
                f_name: isExist?.fname,
                l_name: isExist?.lname,
                email: isExist?.email,
                phone: isExist?.phone,
                about: isExist?.about,
                address: isExist?.address,
                username: isExist?.username,
                profile: isExist?.profile
            }
        })
    } catch (error) {
        res.status(409).json({
            message: error?.message,
            status: false,
        })
    }
}
module.exports = profile