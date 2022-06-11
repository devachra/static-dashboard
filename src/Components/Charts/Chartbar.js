import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import classes from "./Chartbar.module.css";

const Chartbar = () => {
  return (
    <div className={classes.chart}>
      <Doughnut
        data={{
          labels: ["Budget", "Blance Budget"],
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
  );
};

export default Chartbar;
