// DataBase  Config File

const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense_tracking", "root", "210431@rath", {
  dialect: "mysql",
  host: "localhost",
});

// Add All Database here
const dbs = [
  require("../models/userModel"),
  require("../models/expenseModel"),

];

for (const db of dbs) {
  db(sequelize);
}

const User = sequelize.models.user;
const Expense = sequelize.models.expense;


// User to Expense (One to Many Relation Ship)
User.hasMany(Expense, {
  onDelete: "CASCADE",
});
Expense.belongsTo(User);




module.exports = sequelize;
