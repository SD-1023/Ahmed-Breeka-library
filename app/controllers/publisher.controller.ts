import { Request, Response } from "express";
import PublisherServices from "../services/publisher.services"

// get all books function
/*export*/ const getBooks = async(req: Request, res: Response) =>{
    try {
        //const data = await db.books.findAll();
        const data = await PublisherServices.getAll();
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
        const data = await PublisherServices.getOneById(Number(bookId));
        res.json(data);
    } catch (error) {
        throw error;
    }
};

// add new book function
/*export*/ const addBook = async(req: Request, res: Response) =>{
    try {
  
        //const {title, isbn, publisher_id, year, author, pages} = req.body;
        
        const data = await PublisherServices.create(req.body);
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

        const updateBook = await PublisherServices.update(bookId, updateData);

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

        await PublisherServices.remove(bookId);

        // if(!updateBook) res.json({status : 'deleted is fieald'});
        res.status(204).json({message: 'Delete is Done'});

    } catch (error) {
        throw error;
    }
};

const publisherController = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};

export default publisherController;