// module.exports = (db, dataType) => {
//     return db.define("publishers", {
//         name: {
//             type: dataType.STRING,
//             allowNull: false,
//         },
//         country: {
//             type: dataType.STRING
//         }
//     });
// };
import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
    return sequelize.define("publishers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING
        }
    });
};