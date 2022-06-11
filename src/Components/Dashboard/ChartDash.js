import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import classes from "./ChartDash.module.css";

const ChartDash = () => {
  return (
    <div className={classes.charts}>
      <div className={classes.chart}>
        <Bar
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 10, 3, 5, 2, 3, 13, 14, 9, 6, 4, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div className={classes.doughnut}>
        <Doughnut
          data={{
            labels: ["% of Income Budget"],
            datasets: [
              {
                label: "# of Budget",
                data: [67, 23],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgb(240, 229, 229)",
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgb(240, 229, 229)"],
                borderWidth: 1,
                cutout: "90%",
              },
            ],
          }}
        />
      </div>
      <div className={classes.doughnut}>
        <Doughnut
          data={{
            labels: ["% of Expenses Budget"],
            datasets: [
              {
                label: "# of Budget",
                data: [48, 52],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgb(240, 229, 229)",
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgb(240, 229, 229)"],
                borderWidth: 1,
                cutout: "90%",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChartDash;
