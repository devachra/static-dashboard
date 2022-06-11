import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiPagesFill } from "react-icons/ri";
import { MdSettingsApplications, MdOutlineWidgets } from "react-icons/md";
import { TbComponents } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { BsBarChartSteps } from "react-icons/bs";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Pages",
    path: "/pages",
    icon: <RiPagesFill />,
    cName: "nav-text",
  },
  {
    title: "Application",
    path: "/application",
    icon: <MdSettingsApplications />,
    cName: "nav-text",
  },
  {
    title: "UI Component",
    path: "/ui",
    icon: <TbComponents />,
    cName: "nav-text",
  },
  {
    title: "Widgets",
    path: "/widget",
    icon: <MdOutlineWidgets />,
    cName: "nav-text",
  },
  {
    title: "Forms",
    path: "/form",
    icon: <FaWpforms />,
    cName: "nav-text",
  },
  {
    title: "Charts",
    path: "/chart",
    icon: <BsBarChartSteps />,
    cName: "nav-text",
  },
];
