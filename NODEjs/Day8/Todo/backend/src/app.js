require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const{ todoRouter } = require("./Routes/TodoRoutes")
const cors = require("cors")
const app = express()

app.use(cors({
    origin : ["http://localhost:5173", "http://localhost:5174" ],
    methods : ["GET", "POST", "DELETE", "PUT", "PATCH"]
}))
app.use(express.json())
app.use(todoRouter)


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected.")

    app.listen(process.env.PORT, () => {
        console.log(`Server Running on PORT ${process.env.PORT}.`)
    })
})
.catch(() => {
    console.log("DB Connection Failed")
})

