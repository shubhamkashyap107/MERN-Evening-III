const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    // title : String
    title : {
        type : String,
        trim : true,
        required : true,
        minLength : 10,
        maxLength : 50
    },
    desc : {
        type : String,
        trim : true,
        required : true,
        minLength : 10,
        maxLength : 150
    },
    isCompleted : {
        type : Boolean,
        required : true,
        default : false
    }
})

const Todo = mongoose.model("Todo", todoSchema) // Todos


module.exports = {
    Todo
}











