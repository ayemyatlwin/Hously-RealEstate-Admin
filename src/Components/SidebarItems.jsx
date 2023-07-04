import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VillaIcon from "@mui/icons-material/Villa";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { HiOutlineLogout } from "react-icons/hi";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Tooltip, Button } from "@mantine/core";

const SidebarItems = () => {
  const matches = useMediaQuery("(min-width:1130px)"); /*no < 1130px */

  const nav = useNavigate();

  const logoutHandler = () => {
    sessionStorage.removeItem("username");
    nav("/login");
  };

  const personalItem = [
    {
      path: "/",
      icon: <SpeedIcon />,
      name: "dashboard",
    },
    {
      path: "/calendar",
      icon: <EventNoteIcon />,
      name: "calendar",
    },
    {
      path: "/customer",
      icon: <PeopleAltIcon />,
      name: "customer",
    },

    // {
    //   path: '/clientsDetail', RiCalendarTodoFill
    //   icon: <PeopleAltIcon/>,
    //   name: 'customer detail',
    // }
  ];

  const propertyListItem = [
    {
      path: "/propertylist",
      icon: <VillaIcon />,
      name: "property list",
    },
    // {
    //   path: '/rentdetail',
    //   icon: <TaskAltIcon/>,
    //   name: 'property rent detail',
    // },
    // {
    //   path: '/saledetail',
    //   icon: <TaskAltIcon/>,
    //   name: 'property sale detail',
    // },
    {
      path: "/create",
      icon: <AddHomeWorkIcon />,
      name: "add property",
    },
    // {
    //   path: "/salecreate",
    //   icon: <AddHomeWorkIcon />,
    //   name: "add sale property",
    // },
  ];

  return (
    <div className=" ">
      {/* divider */}

      {matches ? (
        /* false */

        <div>
          <div className={` mb-4`}>
            <h1 className="text-[#6c757d] uppercase pt-[30px] pr-[14px] pb-[14px] pl-0 text-[12px] font-semibold">
              ---personal
            </h1>
          </div>

          {/* Dashboard, Customer  */}
          <div className=" ">
            {personalItem?.map((item, i) => {
              return (
                <div className=" hover:bg-[#0000000a]" key={i}>
                  <NavLink
                    to={item.path}
                    className={`flex py-[10px] px-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] ${({
                      isActive,
                    }) =>
                      isActive ? "active" : " border-l-4 border-transparent"}`}
                  >
                    <div className={` me-2  `}>{item.icon}</div>
                    <div className={` capitalize mt-[2px] `}>{item.name}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          {/* divider */}
          <div className={` mb-4 `}>
            <h1 className="text-[#6c757d] uppercase pt-[30px] pr-[14px] pb-[14px] pl-0 text-[12px] font-semibold">
              ---professional
            </h1>
          </div>

          {/* Property */}
          <div className=" ">
            {propertyListItem?.map((item, i) => {
              return (
                <div className=" hover:bg-[#0000000a]" key={i}>
                  <NavLink
                    to={item.path}
                    className={`flex py-[10px] px-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] ${({
                      isActive,
                    }) =>
                      isActive ? "active" : " border-l-4 border-transparent"}`}
                  >
                    <div className={` me-2  `}>{item.icon}</div>
                    <div className={` capitalize mt-[2px]`}>{item.name}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* true */

        <div className=" mt-10 flex flex-col gap-36 md:gap-72">
          <div className=" ">
            {/* Dashboard, Customer  */}
            <div className=" ">
              {personalItem?.map((item, i) => {
                return (
                  <div className=" hover:bg-[#0000000a]" key={i}>
                    <NavLink
                      to={item.path}
                      className={`flex  p-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] ${({
                        isActive,
                      }) =>
                        isActive
                          ? "active"
                          : " border-l-4 border-transparent"}`}
                    >
                      <div className={` -ms-[6px] `}>{item.icon}</div>
                    </NavLink>
                  </div>
                );
              })}
            </div>

            {/* Property */}
            <div className=" ">
              {propertyListItem?.map((item, i) => {
                return (
                  <div className=" hover:bg-[#0000000a]" key={i}>
                    <NavLink
                      to={item.path}
                      className={`flex  p-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] ${({
                        isActive,
                      }) =>
                        isActive
                          ? "active"
                          : " border-l-4 border-transparent"}`}
                    >
                      <div className={` -ms-[6px] `}>{item.icon}</div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>

          {/* logout */}
          <div className="">
            <div
              onClick={logoutHandler}
              className={`flex  p-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] cursor-pointer `}
            >
              <div className={` -ms-[6px] `}>
                {" "}
                {/* mt-[10rem] */}
                <HiOutlineLogout size={30} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItems;
