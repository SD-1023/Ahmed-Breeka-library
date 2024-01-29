import { error } from "console";
import db from "../models/index";

// Get All Books
const getAll =async () => {
    return await db.books.findAll();
};

// Get Book By Id
const getOneById =async (bookId:number) => {
    // return await db.books.findOne({ where: { id: bookId } });
    const book = await db.books.findByPk(bookId);

    if (book === null) {
        return "The book does not exist";
    }

    const publisher = await db.publishers.findOne({ where: { id: book.publisher_id }});
    const comments = await db.comments.findAll({ where: { book_id: book.id }}); //book_id
    
    
    return {book, publisher, comments};
};

// Create New Book
const create = async (title:string, isbn:string, publisher_id:number, year?:number, author?:string, pages?:number) => {
    return await db.books.create({
        'title': title,
        'isbn': isbn,
        'publisher_id': publisher_id,
        'year': year,
        'author': author,
        'pages': pages,
    });
    
};

// Update Book
const update =async (bookId:number, data:any) => {
    const existingBook = await db.books.findByPk(bookId);

    if (!existingBook) {
        return {status: "not found", message: "feaild update, The book is not exist"}; // Book not found
    }

    await existingBook.update(data);

    return  existingBook;
};

// Remove Book
const remove = async (bookId:number) => {
    const existingBook = await db.books.findByPk(bookId);

    if (!existingBook) {
        throw new Error('feaild delete, The book is not exist'); //{status: "not found", message: "feaild delete, The book is not exist"}; // Book not found
    }

    await existingBook.destroy();
    return "delete is done";
};


const bookServices = {
    getAll,
    getOneById,
    create,
    update,
    remove
}

export default bookServices;