module.exports.emailValid = (req, res, next) => {
    try {
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

        const { email } = req?.body
        const isValidEmail = emailRegex.test(email)
        if (!isValidEmail) {
            throw new Error("invalid Email!")
        }
        next()
    } catch (error) {
        res.status(401).json({
            message: error?.message,
            status: false,
        })
    }
}