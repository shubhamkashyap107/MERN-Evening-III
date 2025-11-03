const express = require("express")
const router = express.Router()

let users = [
    { id: 1, name: "Shubham", age: 25, email: "shubham@example.com" },
    { id: 2, name: "Sandeep", age: 30, email: "sandeep@example.com" },
    { id: 3, name: "Priya", age: 22, email: "priya@example.com" },
    { id: 4, name: "Ravi", age: 28, email: "ravi@example.com" },
    { id: 5, name: "Aarav", age: 26, email: "aarav@example.com" }
]

router.get("/users", (req, res) => {
    res.json(users)
})

router.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).json({ message: "User not found" })
    res.json(user)
})

router.post("/users", (req, res) => {
    const { name, age, email } = req.body
    if (!name || !age || !email)
        return res.status(400).json({ message: "All fields required" })

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        age,
        email
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

router.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).json({ message: "User not found" })

    const { name, age, email } = req.body
    if (name) user.name = name
    if (age) user.age = age
    if (email) user.email = email

    res.json(user)
})

router.delete("/users/:id", (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: "User not found" })

    const deleted = users.splice(index, 1)
    res.json(deleted[0])
})

module.exports = {
    userRouter : router
}