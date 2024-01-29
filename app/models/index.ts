import { STRING, Sequelize } from "sequelize";
import DBConfig from "../config/db.config";
import PublisherModel from "./Publisher";
import BookModel from "./Book";
import CommentModel from "./Comment";



const env = process.env.NODE_ENV || 'developmet';
const dbConfig = DBConfig[env];

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
});

const db:any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books =      BookModel(sequelize);       //require("./Book")(sequelize, Sequelize);
db.publishers = PublisherModel(sequelize);  //require("./Publisher")(sequelize, Sequelize);
db.comments =   CommentModel(sequelize);    //require("./Comment")(sequelize, Sequelize);

const Book = db.books;
const Publisher = db.publishers;
const Comment = db.comments;

// Relation Models
//----------------------
// Book has many comment
Book.hasMany(Comment, {
    foreignKey: { name: 'book_id', allowNull: false }
});
Comment.belongsTo(Book,{
    foreignKey: { name: 'book_id', allowNull: false }
});

// publisher has many book
Publisher.hasMany(Book,{
    foreignKey: { name: 'publisher_id', allowNull: false }
});
Book.belongsTo(Publisher,{
    foreignKey: { name: 'publisher_id', allowNull: false }
});

export default db;