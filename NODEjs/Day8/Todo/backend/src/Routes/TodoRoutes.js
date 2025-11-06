const express = require("express")
const router = express.Router()
const{ getAllTodos, getTodoById, addTodo, editTodo, deleteTodo } = require("../Controllers/TodoControllers")

router.get("/todos", getAllTodos)
router.get("/todos/:id", getTodoById)
router.post("/todos", addTodo)
router.patch("/todos/:id", editTodo)
router.delete("/todos/:id", deleteTodo)



module.exports = {
    todoRouter : router
}