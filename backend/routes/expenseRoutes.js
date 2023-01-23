const express = require("express");
const expenseRoute = require("../controllers/expenseController");
const router = express.Router();

router.get("/expense", expenseRoute.getExpenses);

router.post("/expense", expenseRoute.postExpenses);
router.put("/expense/:id", expenseRoute.updateExpense);
router.delete("/expense/:id", expenseRoute.deleteExpense);
router.get("/expense/:id", expenseRoute.getSingleExpense);
module.exports = router;
