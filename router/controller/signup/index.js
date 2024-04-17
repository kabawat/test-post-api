const path = require('path')
const jwt = require('jsonwebtoken')
const { userModal } = require('../../../model')
module.exports.signup = async (req, res) => {
    const { email, fname, lname, phone, about, address, password } = req.body
    // const rootDir = path.dirname(require.main.filename);
    try {
        if (!fname) {
            throw new Error('please Enter a First Name')
        }

        if (!phone) {
            throw new Error('please Enter a phone')
        }

        if (!about) {
            throw new Error('please Enter a about yourself')
        }

        if (!address) {
            throw new Error('please Enter your address')
        }

        if (!lname) {
            throw new Error('please Enter a Last Name')
        }

        if (!password) {
            throw new Error('please Enter a password')
        }

        const isPwds = is_valid_password(password)
        if (isPwds) {
            throw new Error(isPwds)
        }

        const randomNum = (Math.random() * 10000).toFixed(0)
        const username = `${fname}${randomNum}`

        // const filename = `${username}-${new Date().getTime()}${path.extname(req?.files?.profile.name)}`
        // const saveFile = path.join(rootDir, `public/user/${filename}`);
        // const profile_image = `/user/${filename}`;




        // req?.files?.profile.mv(saveFile);
        const formData = new userModal({
            email, fname, lname, phone, about, address, pwd: password, username
            // profile: profile_image
        })
        
        const isSave = await formData.save()
        
        if (!isSave) {
            throw new Error('something wrong')
        }
        
        const token = jwt.sign({ id:isSave?._id }, 'alsdkfj09e029309234')
        res.status(200).json({
            message: 'Registration successful!',
            status: true,
            data: {
                username,
                token
            }
        })

    } catch (error) {
        if (error?.message.includes('E11000 duplicate key error collection')) {
            error.message = `${email} already exists`
        }
        res.status(409).json({
            message: error?.message,
            status: false,
        })
    }
}

function is_valid_password(password) {
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "include at least one uppercase letter in password";
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "include at least one lowercase letter in password";
    }

    // Check for 
    if (!/[0-9]/.test(password)) {
        return 'include at least one digit (number) in password';
    }
    // Check for the minimum length of 8 characters
    if (password.length < 8) {
        return 'password minimum length of 8 characters';
    }

    // If all checks pass, the password is valid
    return '';
}