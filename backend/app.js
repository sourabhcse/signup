const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const cors = require("cors");
const helmet=require('helmet')
const dotenv = require("dotenv");

// DOTENV
dotenv.config();

const app = express();
app.use(helmet())

app.use(cors());
app.use(express.json());

// Registering Routers

const routes = [
  require("./routes/user"),
  require("./routes/expenseRoute"),
 
];

for (const route of routes) {
  app.use(route);
}
app.use((req,res)=>{
  console.log('urlll',req.url)
  res.sendFile(path.join(__dirname,`public/views/${req.url}`));
  
})
sequelize // { alter: true }
  .sync()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Listening From 3000 Port");
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
