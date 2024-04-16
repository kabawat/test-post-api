const jwt = require('jsonwebtoken')

const { userModal } = require('../../../model')
async function profile(req, res) {
    try {
        const { token } = req.body

        const isToken = jwt.verify(token, 'alsdkfj09e029309234')
        if (!isToken?.id) {
            throw new Error('invalid token')
        }
        const isExist = await userModal.findOne({ _id: isToken?.d })
        if (!isExist) {
            throw new Error('data not Found')
        }

        delete isExist.password
        res.status(200).json({
            message: 'authentication successful!',
            status: true,
            data: isExist
        })
    } catch (error) {
        res.status(409).json({
            message: error?.message,
            status: false,
        })
    }
}
module.exports = profile