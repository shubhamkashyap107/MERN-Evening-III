require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected Successfully")

    app.listen(process.env.PORT, () => {
        console.log(`Server Running on Port ${process.env.PORT}`)
    })
})
.catch(() => {
    console.log("DB Connection Failed, Server Killed")
})


