const jwt = require('jsonwebtoken')
module.exports.signup = (req, res) => {
    try {
        const { email, fname, lname, password } = req.body
        console.log({ email, fname, lname, password })
        if (!fname) {
            throw new Error('please Enter a First Name')
        }
        if (!lname) {
            throw new Error('please Enter a Last Name')
        }
        if (!password) {
            throw new Error('please Enter a password')
        }
        const isPwds = is_valid_password(password)
        console.log(isPwds)
        if (isPwds) {
            throw new Error(isPwds)
        }

        const token = jwt.sign({ email }, "ty9we3ys4985lkjtkjkj435")
        res.status(200).json({
            message: 'Registration successful!',
            status: true,
            token: token.split('.')[0]
        })
    } catch (error) {
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