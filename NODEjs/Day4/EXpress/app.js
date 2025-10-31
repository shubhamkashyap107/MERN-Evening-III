const express = require("express")
const app = express()
app.use(express.json())

let arr = [
    {
        name : "Shubham",
        age : 32
    },
    {
        name : "Kashish",
        age : 32
    },
    {
        name : "Kartik",
        age : 32
    },
    {
        name : "Prashant",
        age : 32
    },
]


app.get("/get-data", (req,res) => {
    res.json(arr)
})

app.get("/get-user-data", (req, res) => {
    const{name} = req.body
    const foundUser = arr.find((item) => {
        return item.name.toLowerCase() == name.toLowerCase()
    })
    res.json(foundUser)
})

app.get("/get-user-through-query", (req, res) => {
    console.log(req.query)
    const{name} = req.query
    const foundUser = arr.find((item) => {
        return item.name.toLowerCase() == name.toLowerCase()
    })
    res.json(foundUser)
})


app.listen(8080, () => {
    console.log("Server Running on Port 8080")
})