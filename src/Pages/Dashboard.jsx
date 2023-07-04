import React, { useEffect, useState } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import NavbarMini from "../Components/NavbarMini";
import SidebarMini from "../Components/SidebarMini";
import { useGetUserInfosQuery } from "../redux/api/userInfosApi";

const Dashboard = ({children}) => {
  const matches = useMediaQuery("(min-width:1130px)"); /* 1130px */

  const nav = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    if (username === " " || username === null || password === " " || password === null) {
      nav("/login");
    }
  }, []);

  const userinfo = sessionStorage.getItem("userinfo");
  const userInfos = JSON.parse(userinfo);
  // console.log(userInfos);

  const { data: admin, isLoading} = useGetUserInfosQuery();

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <div className="custom-loader"></div>
      </div>
    );
  }

  return (
    <div>
      {/* <span>{`(min-width:600px) matches: ${matches}`}</span>; */}
      {matches ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar  /> 
          {admin?.map((minmin)=>{
              return(
                 <Sidebar userInfos={userInfos} key={minmin.id} minmin={minmin}/>
              )
          })}
         
          <Box
            component="main"
            className=" pt-[57px] sm:pt-[63px]"
            sx={{ flexGrow: 1, backgroundColor: "#EBEFF3", px: 0 }}>
            <div className="">{children}</div> 
          </Box>
        </Box>
      ) : (
        // <MiniDrawer />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {admin?.map((minmin)=>{
              return(
                <NavbarMini userInfos={userInfos} key={minmin.id} minmin={minmin}/>
              )
          })}
          <SidebarMini/>
          <Box
            component="main"
            className=" pt-[57px] sm:pt-[63px]"
            sx={{ flexGrow: 1, backgroundColor: "#EBEFF3", px: 0 }}>
            <div className="">{children}</div> 
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Dashboard;
