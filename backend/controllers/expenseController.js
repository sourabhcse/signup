const sequelize = require("../utils/database");

const Expense = sequelize.models.expense;
const Category = sequelize.models.category;
const Order = sequelize.models.order;
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRETE_KEY;

async function checkPremiumUser(req) {
  let token = req.headers.token;
  let isPremium = 0;
  if (token) {
    let decryptedToken = jwt.decode(JSON.parse(token), SECRET_KEY);
    try {
      let res = await Order.count({ where: { userId: decryptedToken.userId } });
      if (res > 0) {
        isPremium = 1;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return isPremium;
}



exports.getSingleExpense = async (req, res, next) => {
  let id = req.params.id;
  try {
    let data = await expenseModel.findAll({
      where: {
        _id: id,
      },
    });
    res.status(200).json(data);
  } catch (err) {}
};

exports.postExpenses = async (req, res, next) => {
  try {
    let body = req.body;
    let data = await expenseModel.create(body);
    res.status(201).json(data._id);
  } catch (err) {
    console.log(err);
  }
};

exports.updateExpense = async (req, res, next) => {
  try {
    let body = req.body;
    let id = req.params.id;
    let data = await expenseModel.update(
      { ...body },
      {
        where: {
          _id: id,
        },
      }
    );

    res.status(201).json({ Update: "Done" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExpense = async (req, res, next) => {
  try {
    let id = req.params.id;

    let data = await expenseModel.destroy({ where: { _id: id } });

    res.status(200).json({});
  } catch (err) {
    console.log(err);
  }
};
