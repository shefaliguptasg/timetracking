import React, { useState } from "react";
import "./Styles/Expences.css";
import "./Styles/ExpencesItem.css"

function ExpenseItem(props) {
  console.log("---------------->", props);
  const displayDate = props.date.toLocaleString("es-US", { month: "long" });
  return (
    <div className="expenses" >
      <div>
        <div>{displayDate}</div>
      </div>
      <div className="expense-item">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
export default ExpenseItem;
