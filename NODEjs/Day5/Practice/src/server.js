const express = require("express")
const app = express()
const uuid = require("uuid")

let users = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 28,
    "city": "New York"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "age": 32,
    "city": "Los Angeles"
  },
  {
    "id": 3,
    "name": "Mike Johnson",
    "email": "mikej@example.com",
    "age": 40,
    "city": "Chicago"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emilyd@example.com",
    "age": 24,
    "city": "Houston"
  },
  {
    "id": 5,
    "name": "Robert Brown",
    "email": "robertb@example.com",
    "age": 36,
    "city": "Miami"
  },
  {
    "id": 6,
    "name": "Sarah Wilson",
    "email": "sarahw@example.com",
    "age": 29,
    "city": "San Francisco"
  },
  {
    "id": 7,
    "name": "David Lee",
    "email": "davidl@example.com",
    "age": 45,
    "city": "Seattle"
  },
  {
    "id": 8,
    "name": "Jessica Miller",
    "email": "jessicam@example.com",
    "age": 31,
    "city": "Boston"
  },
  {
    "id": 9,
    "name": "William Anderson",
    "email": "williamand@example.com",
    "age": 50,
    "city": "Denver"
  },
  {
    "id": 10,
    "name": "Olivia Martinez",
    "email": "oliviam@example.com",
    "age": 27,
    "city": "Austin"
  }
]

app.use(express.json())

app.get("/users", (req, res) => {
    try {
        res.json(users)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }

})


app.get("/users/:id", (req, res) => {
    const {id} = req.params

    const foundUser = users.find((item) => {
        return item.id == id
    })

    res.json(foundUser || {})

})


app.post("/users", (req, res) => {
    const{name, age, email, city} = req.body
    let newObj = {name, age, email, city, id : uuid.v1()}
    users.push(newObj)
    // res.status(201).json({msg : "done"})
    res.status(201).json(users)
})


app.put("/users/:id", (req, res) => {
    const{id} = req.params
    const{name, age, city, email} = req.body
    for(let item of users)
    {
        if(item.id == id)
        {
            item.age = age
            item.city = city
            item.email = email
            item.name = name
        }
    }
    // res.json({msg : "done"})
    res.json(users)
})


app.delete("/users/:id", (req, res) => {
    const{id} = req.params

    const filteredUsers = users.filter((item) => {
        return item.id != id
    })
    users = filteredUsers

    // res.json({msg : "done"})
    res.json(users)

})

app.listen(8080, () => {
    console.log("Server Running")
})