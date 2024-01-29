import { Router } from "express";
import bookController from '../controllers/book.controller';

const booksRouter = Router();

// get all books
booksRouter.get("/", bookController.getBooks);

// add new book
booksRouter.post("/", bookController.addBook);

// get book by ID => hi publisher and his comments 
booksRouter.get("/:id", bookController.getBookById);

// update book
booksRouter.put("/:id", bookController.updateBook);

// delete book
booksRouter.delete("/:id", bookController.deleteBook);

export default booksRouter;