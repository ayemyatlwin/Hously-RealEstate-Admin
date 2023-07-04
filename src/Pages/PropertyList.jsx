import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import PropertyListItem from "../Components/PropertyListItem";
import CreateButton from "../Components/CreateButton";
import Footer from "../Components/Footer";

const drawerWidth = 64;

const PropertyList = () => {
  return (
    <Dashboard>
      {/* home section */}
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF] `}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">
            property lists
          </div>
          <div className="flex justify-between items-center gap-3 ml-auto">
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  className=" text-[#8d97ad]"
                />
              }
              aria-label="breadcrumb"
            >
              <Link to={"/"}>
              <p className=" capitalize cursor-pointer text-[var(--text-color)] text-[13px]">
                  home
                </p>
              </Link>
              <p className=" capitalize text-green-700 text-[13px]">
                property lists
              </p>
            </Breadcrumbs>
            <Link to={"/create"}>
              <CreateButton/>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full px-3 md:px-6 py-7">
        <PropertyListItem />
      </div>

      {/* footer section */}
      <Footer/>
    </Dashboard>
  );
};

export default PropertyList;
