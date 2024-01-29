import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
    return sequelize.define("book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // publisher_id: {
        //     type: dataType.INTEGER,
        //     allowNull: false
        // },
        year: {
            type: DataTypes.DATE
        },
        author: {
            type: DataTypes.STRING
        },
        pages: {
            type: DataTypes.INTEGER
        }
    });
}