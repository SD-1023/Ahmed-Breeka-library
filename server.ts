import express, {Application} from "express";
import bodyParser from "body-parser";
import db from "./app/models/index";
import router from "./app/routers/index";
// import cors from "cors"

const app: Application = express();
const port:number = Number(process.env.PORT) || 3000;

// Middlewares
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended : true})); // use qs library
app.use(express.json());

//const db = require("./app/models/index");
db.sequelize.sync(/*{alter: true}*/);

db.sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  // routers
  app.use('/library/api', router);

try {
  app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error) {
  console.log(`Error occurred: ${error.message}`);
}
