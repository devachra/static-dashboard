import React from "react";
import ChartDash from "./ChartDash";
import Expense from "./Expense";
import Navbar from "./Navbar";
import classes from "./Dashboard.modlule.css";

const Dashboard = () => {
  return (
    <div className={classes.dash}>
      <Navbar />
      <Expense />
      <ChartDash />
    </div>
  );
};

export default Dashboard;
