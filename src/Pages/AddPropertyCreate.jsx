import React from "react";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PropertyCreate from "./PropertyCreate";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const drawerWidth = 64;

const AddPropertyCreate = () => {
  return (
    <Dashboard>
      {/* home section */}
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF] `}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">
            add property
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
                <p className=" capitalize cursor-pointer text-[#212529] text-[13px]">
                  home
                </p>
              </Link>
              <p className=" capitalize text-green-700 text-[13px]">
                add property
              </p>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      {/* Start Write Here Add Property  */}
      <div className="w-full px-3 md:px-6 py-7">
        <PropertyCreate />
      </div>

      {/* footer */}
      <Footer/>
    </Dashboard>
  );
};

export default AddPropertyCreate;
