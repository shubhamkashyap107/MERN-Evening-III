const express = require("express")
const app = express()


let data = [
  { "name": "Aarav Sharma", "age": 25, "gender": "Male" }, // aarav sharma == aarav
  { "name": "Priya Mehta", "age": 22, "gender": "Female" },
  { "name": "Rohan Verma", "age": 28, "gender": "Male" },
  { "name": "Isha Kapoor", "age": 24, "gender": "Female" },
  { "name": "Karan Singh", "age": 30, "gender": "Male" },
  { "name": "Neha Patel", "age": 26, "gender": "Female" },
  { "name": "Arjun Nair", "age": 27, "gender": "Male" },
  { "name": "Simran Kaur", "age": 23, "gender": "Female" },
  { "name": "Vikram Joshi", "age": 29, "gender": "Male" },
  { "name": "Ananya Das", "age": 21, "gender": "Female" }
]


app.use(express.json())

app.get("/hello", (req, res) => {
    res.send("Hello World")
})

app.get("/get-user-data", (req, res) => {
    res.json(data)
})

app.get("/get-profile", (req, res) => {
    const{name} = req.query

    const foundObj = data.find((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    res.json(foundObj || {})
})

app.get("/user-data", (req, res) => {
    const{name} = req.body

    const foundObj = data.find((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    res.json(foundObj || {})

})


app.get("/new-endpoint/:name/:age/:surname", (req, res) => {
    // console.log(req.params)
    const{name} = req.params

     const foundObj = data.find((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    res.json(foundObj || {})

})


fetch("API", {method : "GET", body : {}})





app.listen(8080, () => {
    console.log("Server Running on PORT 8080")
})