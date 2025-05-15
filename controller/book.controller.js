import Book from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("author");
        res.status(200).json({
            status: "success",
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate("author");
        if (!book) {
            return res.status(404).json({
                status: "error",
                message: "Book not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, author, publishedYear, genre, pages } = req.body;
        const newBook = await Book.create({
            title,
            author,
            publishedYear,
            genre,
            pages,
        });
        res.status(201).json({
            status: "success",
            data: newBook,
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { title, author, publishedYear, genre, pages } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, publishedYear, genre, pages },
            { new: true, runValidators: true }
        ).populate("author");

        if (!updatedBook) {
            return res.status(404).json({
                status: "error",
                message: "Book not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: updatedBook,
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({
                status: "error",
                message: "Book not found",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Book deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};
