import express from "express";
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", createBook);

router.patch("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;
