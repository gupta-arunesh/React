import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // console.log(useState());
  // console.log(title);

  // let title = props.title;

  const clickHandler = () => {
    setTitle("Hello Arunesh");
    // console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate dateFile={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Click Me</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
