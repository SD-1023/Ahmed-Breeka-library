import { Router } from "express";
import booksRouter from "./books.routers";
import publishersRouter from "./publishers.routers";
import commentsRouter from "./comments.routers";

const router = Router();

router.use('/books', booksRouter);
router.use('/publishers', publishersRouter);
router.use('/comments', commentsRouter);


export default router;