import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);

    props.onAddExpese(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
