import { Request, Response } from "express";
import BookServices from "../services/books.services"

// get all books function
/*export*/ const getBooks = async(req: Request, res: Response) =>{
    try {
        //const data = await db.books.findAll();
        const data = await BookServices.getAll();
        if(data) res.json({book : 'books table is empty'});
        res.json(data);
    } catch (error) {
        throw error;
    }
    //res.json({book : 'books is empty'});
};

/*export*/ const getBookById = async(req: Request, res: Response) =>{
    try {
        const bookId = req.params.id;
        const data = await BookServices.getOneById(Number(bookId));
        res.json(data);
    } catch (error) {
        throw error;
    }
};

// add new book function
/*export*/ const addBook = async(req: Request, res: Response) =>{
    try {
        // const title = req.body.title;
        // const isbn = req.body.isbn;
        // const publisher_id = req.body.publisher_id;
        // const year = req.body.year;
        // const author = req.body.author;
        // const pages = req.body.pages;

        const {title, isbn, publisher_id, year, author, pages} = req.body;
        
        const data = await BookServices.create(title, isbn, Number(publisher_id), Number(year), author, Number(pages));
        res.status(200).json(data);
    } catch (error) {
        throw error;
    }
};

// update book function
/*export*/ const updateBook = async(req: Request, res: Response) =>{
    try {
        const bookId = Number(req.params.id);
        const updateData = req.body;

        const updateBook = await BookServices.update(bookId, updateData);

        if(!updateBook) res.json({status : 'update is fieald'});

        res.json(updateBook);

    } catch (error) {
        throw error;
    }
};

// delete book function
/*export*/ const deleteBook = async(req: Request, res: Response) =>{
    try {
        const bookId = Number(req.params.id);

        await BookServices.remove(bookId);

        // if(!updateBook) res.json({status : 'deleted is fieald'});
        res.status(204).json({message: 'Delete is Done'});

    } catch (error) {
        throw error;
    }
};

const bookController = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};

export default bookController;