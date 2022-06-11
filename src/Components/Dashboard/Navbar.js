import React from "react";
import classes from "./Navbar.module.css";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.search}>
        <input
          className={classes.input}
          type="search"
          name="search"
          placeholder="Search here"
        />
      </div>
      <div className={classes.icon}>
        <span>
          <MdOutlineNotificationAdd />
        </span>
        <span>
          <BiMessageRoundedDetail />
        </span>
        <span>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg"
            alt=""
            className={classes.img}
          />
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
