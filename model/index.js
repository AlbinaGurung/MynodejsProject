const dbConfig = require("../config/dbconfig");
const { Sequelize, DataTypes } = require("sequelize");


//We give sequalize all the database configurations and asking it to connect to db
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
// checking whether connection is successfull or not
sequelize
  .authenticate()
  .then(() => {
    console.log("you are CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });


  /*define a object called db.It is like a container as it can store methods and properties
  in it*/
const db = {};


db.tasks=require('./taskModel.js')(sequelize,DataTypes);//storing taskModel inside db
db.sequelize = sequelize;//stroing sequalize instance to db.
db.sequelize=Sequelize;//storing sequalize constructor to db

/*sequalize.sync will keep the models and database syncronized by refelecting the 
changes made in model into the database*/
db.sequelize.sync({ force: false}).then(() => {
  console.log("yes re-sync done");
});

/*finally exporting db so that other parts of the application can import it to 
access the models and sequalize instance*/
module.exports = db;