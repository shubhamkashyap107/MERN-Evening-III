const express = require("express")
const router = express.Router()
const{ getAllBooks, getBooksById, addBook, editBook, deleteBook } = require("../controller/BookController")



router.get("/books", getAllBooks)
router.get("/books/:id", getBooksById)
router.post("/books", addBook)
router.put("/books/:id", editBook)
router.delete("/books/:id", deleteBook)


module.exports = {
    bookRouter : router
}