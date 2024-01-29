import { error } from "console";
import db from "../models/index";

// Get All publishers
const getAll =async () => {
    return await db.publishers.findAll();
};

// Get publisher By Id
const getOneById =async (publisherId:number) => {
    const publisher = await db.publishers.findByPk(publisherId);

    if (publisher === null) {
        return "The publisher does not exist";
    }

    return { publisher};
};

// Create New publisher
const create = async (data: any) => {
    return await db.publishers.create(data);
};

// Update publisher
const update =async (publisherId:number, data:any) => {
    const existingItem = await db.publishers.findByPk(publisherId);

    if (!existingItem) {
        return {status: "not found", message: "feaild update, The publisher is not exist"};
    }

    await existingItem.update(data);

    return  existingItem;
};

// Remove publisher
const remove = async (publisherId:number) => {
    const existingItem = await db.publishers.findByPk(publisherId);

    if (!existingItem) {
        throw new Error('feaild delete, The publisher is not exist');
    }

    await existingItem.destroy();
    return "delete is done";
};


const publisherServices = {
    getAll,
    getOneById,
    create,
    update,
    remove
}

export default publisherServices;