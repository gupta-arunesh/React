import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpesnse = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses Found</p>;
  if (filteredExpesnse.length > 0) {
    expensesContent = filteredExpesnse.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* FIRST SOLUTION
         {filteredExpesnse.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filteredExpesnse.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* SECOND SOLUTION
         {filteredExpesnse.length === 0 && <p>No Expenses Found</p>}
        {filteredExpesnse.length > 0 &&
          filteredExpesnse.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
