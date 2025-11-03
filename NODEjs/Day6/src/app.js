require("dotenv").config()
const express = require("express")
const app = express()
const { bookRouter } = require("./router/BookRouter")
const { userRouter } = require("./router/UserRouter")


app.use(express.json()) // to parse JSON bodies
app.use(userRouter)
app.use(bookRouter)

app.use((req, res) => {
    res.status(404).json({error : "Not Found"})
})



app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`)
})
