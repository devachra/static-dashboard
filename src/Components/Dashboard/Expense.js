import React from "react";
import classes from "./Expense.module.css";

const Expense = () => {
  return (
    <div>
      <div className={`${classes.expense} ${classes.expenses}`}>
        <div className={`${classes["items"]}`}>
          <h5>Total Income</h5>
          <h3>$ 579,000</h3>
          <p>saved 25%</p>
        </div>
        <div className={`${classes["items"]} ${classes.color}`}>
          <h5>Total Expeses</h5>
          <h3>$ 79,000</h3>
          <p>saved 25%</p>
        </div>
      </div>
      <div className={classes.expense}>
        <div className={`${classes["items"]} ${classes.color1}`}>
          <h5>Cash on Hand</h5>
          <h3>$ 92,000</h3>
          <p>saved 25%</p>
        </div>
        <div className={`${classes["items"]} ${classes.color2}`}>
          <h5>Net Profit Margin</h5>
          <h3>$ 179,000</h3>
          <p>saved 25%</p>
        </div>
      </div>
    </div>
  );
};

export default Expense;
