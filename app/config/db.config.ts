import { Dialect } from "sequelize";

require('dotenv').config();

interface DBConfig{
    HOST: string;
    PORT: number;
    USER: string;
    PASSWORD: string;
    DB: string;
    dialect: Dialect;
    pool:{
        max: number;
        min: number;
        acquire: number;
        idle:   number;
    }
    logging?: boolean; 
}

const dbConfig: {developmet: DBConfig; production:DBConfig} = {
    developmet:{
        HOST: process.env.DB_HOST as string, 
        PORT: Number(process.env.DB_PORT),
        USER: process.env.DB_USERNAME as string,
        PASSWORD: process.env.DB_PASSWORD as string,
        DB: process.env.DB_NAME as string,
        dialect: process.env.DIALECT as Dialect,
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    production:{
        HOST: process.env.DB_HOST as string,
        PORT: Number(process.env.DB_PORT),
        USER: process.env.DB_USERNAME as string,
        PASSWORD: process.env.DB_PASSWORD as string,
        DB: process.env.DB_NAME as string,
        dialect: process.env.DIALECT as Dialect,
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    }
};

export default dbConfig;

// module.exports = {
//     developmet:{
//         HOST: process.env.DB_HOST,
//         PORT: Number(process.env.DB_PORT),
//         USER: process.env.DB_USERNAME,
//         PASSWORD: process.env.DB_PASSWORD,
//         DB: process.env.DB_NAME,
//         dialect: process.env.DIALECT as Dialect,
//         pool:{
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         }
//     },
//     production:{
//         HOST: process.env.DB_HOST,
//         PORT: Number(process.env.DB_PORT),
//         USER: process.env.DB_USERNAME,
//         PASSWORD: process.env.DB_PASSWORD,
//         DB: process.env.DB_NAME,
//         dialect: process.env.DIALECT,
//         pool:{
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         },
//         logging: false
//     }
// }