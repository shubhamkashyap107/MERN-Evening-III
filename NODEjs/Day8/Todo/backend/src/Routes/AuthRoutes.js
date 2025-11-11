const express = require("express")
const router = express.Router()
const validator = require("validator")
const bcrypt = require("bcrypt")
const { User } = require("../Models/Users")
const jwt = require("jsonwebtoken")

router.post("/signup", async(req, res) => {
    try {
        const{username, firstname, password} = req.body

        if(!username || username.length < 5)
        {
            throw new Error("Invalid Username / Please enter a valid username")
        }

        if(!firstname || firstname.length < 2)
        {
            throw new Error("Invalid Name / Please enter a valid name")
        }


        if(!password || password.length < 8)
        {
            throw new Error("Please provide a password / Password should be atleast 8 characters")
        }

        if(!validator.isStrongPassword(password))
        {
            throw new Error("Please enter a strong password")
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const data = await User.create({username, firstname, password : hashedPassword})
        res.status(201).json({msg : "Done", data})

    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.post("/login", async(req, res) => {
    try {
        const{username, password} = req.body

        const foundUser = await User.findOne({username})
        if(!foundUser)
        {
            throw new Error("User does not exist / incorrect username")
        }

        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password)

        if(!isPasswordCorrect)
        {
            throw new Error("Invalid Credentials")
        }

        const token = jwt.sign({id : foundUser._id}, process.env.JWT_SECRET)

        res.cookie("token", token).json({msg : "done"})

    } catch (error) {
        res.status(400).json({error : error.message})
    }
})




module.exports = {
    authRouter : router
}