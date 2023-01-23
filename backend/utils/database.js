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
  require("../models/premiumUserDetailsModel"),

];

for (const db of dbs) {
  db(sequelize);
}

const User = sequelize.models.user;
const Expense = sequelize.models.expense;
const Order = sequelize.models.order;


// User to Expense (One to Many Relation Ship)
User.hasMany(Expense, {
  onDelete: "CASCADE",
});
Expense.belongsTo(User);

// Premium User
User.hasOne(Order, {
  onDelete: "CASCADE",
});
Order.belongsTo(User);

module.exports = sequelize;


module.exports = sequelize;
