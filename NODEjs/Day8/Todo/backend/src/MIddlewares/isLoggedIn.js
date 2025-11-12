const jwt = require("jsonwebtoken")
const { User } = require("../Models/Users")


const isLoggedIn = async(req, res, next) => {
    try {

        const{ token } = req.cookies
        const originalObject  = jwt.verify(token, process.env.JWT_SECRET)
        const foundUser = await User.findById(originalObject.id)

        if(!foundUser)
        {
            throw new Error("Please Log In")
        }

        // res.json({msg : "OK"})
        next()


    } catch (error) {
        res.status(400).json({error : error.message + " / Please Log In First"})
    }
}


module.exports = {
    isLoggedIn
}