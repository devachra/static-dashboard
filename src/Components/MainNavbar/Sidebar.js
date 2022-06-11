import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { GiCrossedChains } from "react-icons/gi";
import { sidebarData } from "./sidebarData";
import { IconContext } from "react-icons";
const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        <div className="logo">
          <span>
            <GiCrossedChains />
          </span>
          <span>Finance</span>
        </div>

        <nav className="nav-menu-active">
          <ul className="nav-menu-items">
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
