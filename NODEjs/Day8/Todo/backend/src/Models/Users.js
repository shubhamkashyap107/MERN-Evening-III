const mongoose = require("mongoose")

const userScehma = new mongoose.Schema({
    username : {
        type : String,
        minlength : 5,
        maxlength : 15,
        required : true,
        unique : true
    },
    firstname : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 20
    },
    password : {
        type : String,
        minlength : 8,
        required : true
    }
})


const User = mongoose.model("User", userScehma)

module.exports = {
    User
}