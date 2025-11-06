const{ Todo } = require("../Models/Todos")



const getAllTodos = async(req, res) => {
    try {
        const data = await Todo.find()
        res.json({data})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}


const getTodoById =  async(req, res) => {
    try {
        const{ id } = req.params
        const data = await Todo.findOne({_id : id})
        res.json({data})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const addTodo = async(req, res) => {
    try {
        const{ title, desc } = req.body
        const val = await Todo.insertOne({title, desc, isCompleted : false})
        res.status(201).json({msg : "done", data : val})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}


const deleteTodo = async(req, res) => {
    try {
        const{id} = req.params
        const deletedItem =  await Todo.deleteOne({_id : id})
        console.log(deletedItem)
        res.json({deletedItem : true})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const editTodo = async(req, res) => {
    try {
        const{ title, desc, isCompleted } = req.body
        const{ id } = req.params
        const data = await Todo.findByIdAndUpdate(id, {title, desc, isCompleted}, {new : true})
        res.json({msg : "done", data})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}



module.exports = {
    getAllTodos, getTodoById, editTodo, deleteTodo, addTodo
}