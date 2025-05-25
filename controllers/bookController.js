const Book = require('../models/Book');

//@desc Create Book [Admin]
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ message: 'Book created successfully', book });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//@desc get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

};

//@desc get single book
exports.getOneBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) { return res.status(404).json({ message: 'book not found' }); }
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//@desc update book[admin]
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: 'book not found' })
        res.json({ message: 'book updated', book });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//delete book[admin]
exports.deleteBook = async(req,res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
    res.json({message:'book deleted'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};