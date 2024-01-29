// module.exports = (db, dataType) => {
//     return db.define("comments", {
//         name: {
//             type: dataType.STRING,
//             allowNull: false,
//         },
//         comment: {
//             type: dataType.STRING,
//             allowNull: false,
//         },
//         // book_id: {
//         //     type: dataType.INTEGER,
//         //     allowNull: false,
//         // },
//         stars: {
//             type: dataType.INTEGER
//         }
//     });
// };

import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
    return sequelize.define('comments',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stars: {
            type: DataTypes.INTEGER
        }
    });
};