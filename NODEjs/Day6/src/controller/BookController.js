let books = [
    { id: 1, title: "DSA", price: 300, author: "Narasimha Karumanchi" },
    { id: 2, title: "MERN", price: 600, author: "Brad Traversy" },
    { id: 3, title: "Clean Code", price: 550, author: "Robert C. Martin" },
    { id: 4, title: "JavaScript: The Good Parts", price: 400, author: "Douglas Crockford" },
    { id: 5, title: "Atomic Habits", price: 450, author: "James Clear" }
]


const getAllBooks = (req, res) => {
    res.json(books)
}

const getBooksById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) return res.status(404).json({ message: "Book not found" })
    res.json(book)
}

const addBook = (req, res) => {
    const { title, price, author } = req.body
    if (!title || !price || !author)
        return res.status(400).json({ message: "All fields required" })

    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        price,
        author
    }
    books.push(newBook)
    res.status(201).json(newBook)
}

const editBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) return res.status(404).json({ message: "Book not found" })

    const { title, price, author } = req.body
    if (title) book.title = title
    if (price) book.price = price
    if (author) book.author = author

    res.json(book)
}

const deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ message: "Book not found" })

    const deleted = books.splice(index, 1)
    res.json(deleted[0])
}


module.exports = {
    getAllBooks, getBooksById, addBook, editBook, deleteBook
}