import { Router } from "express";
import publisherController from "../controllers/publisher.controller";


const publishersRouter = Router();

//publishersRouter.get('/');

// get all publishers
publishersRouter.get("/", publisherController.getBooks);

// add new publisher
publishersRouter.post("/", publisherController.addBook);

// get publisher  by ID 
publishersRouter.get("/:id", publisherController.getBookById);

// update publisher
publishersRouter.put("/:id", publisherController.updateBook);

// delete publisher
publishersRouter.delete("/:id", publisherController.deleteBook);

export default publishersRouter;