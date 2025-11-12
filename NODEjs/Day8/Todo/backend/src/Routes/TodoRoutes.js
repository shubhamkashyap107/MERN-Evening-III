const express = require("express")
const router = express.Router()
const{ getAllTodos, getTodoById, addTodo, editTodo, deleteTodo } = require("../Controllers/TodoControllers")
const { isLoggedIn } = require("../MIddlewares/isLoggedIn")





router.get("/todos", isLoggedIn, getAllTodos)
router.get("/todos/:id", isLoggedIn, getTodoById)
router.post("/todos", isLoggedIn, addTodo)
router.patch("/todos/:id", isLoggedIn, editTodo)
router.delete("/todos/:id", isLoggedIn, deleteTodo)



module.exports = {
    todoRouter : router
}