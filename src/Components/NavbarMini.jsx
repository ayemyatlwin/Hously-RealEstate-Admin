import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

import { AppBar, Toolbar } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";

import { FaLink } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { MdChevronRight } from "react-icons/md";
import ProfileMenuItems from "./ProfileMenuItems";
import { BiSearchAlt } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { TfiUser, TfiEmail, TfiSettings } from "react-icons/tfi";

const drawerWidth = 64;

function NavList({minmin}) {
  /* { user, logoutHandler } */

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const closeMenu = () => setIsMenuOpen(false);

  const [noti, setNoti] = useState(false);
  const [message, setMessage] = useState(false);

  const [profileState, setProfileState] = useState(true);

  const nav = useNavigate();

  const notiItems = [
    {
      icon: <FaLink />,
      color: "#e46a76",
      title: "Lunch Admin",
      p1: "Just see the my new admin!",
      p2: "9:30 AM",
    },
    {
      icon: <AiOutlineCalendar />,
      color: "#ab8ce4",
      title: "Event today",
      p1: "Just a reminder that you have event",
      p2: "9:10 AM",
    },
    {
      icon: <SlSettings />,
      color: "#03a9f3",
      title: "Settings",
      p1: "You can customize this template as you want",
      p2: "9:08 AM",
    },
    {
      icon: <TfiUser />,
      color: "#d32f2f",
      title: "Pavan kumar",
      p1: "Just see the my admin!",
      p2: "9:02 AM",
    },
  ];
  const messageItems = [
    {
      image:
        "https://adminpro-free-nuxtjs.netlify.app/images/users/1.jpg",
      color: "#e46a76",
      title: "Pavan kumar",
      p1: "Just see the my admin!",
      p2: "9:30 AM",
    },
    {
      image:
        "https://adminpro-free-nuxtjs.netlify.app/images/users/4.jpg",
      color: "#15803d",
      title: "Sonu Nigam",
      p1: "I've sung a song! See you at",
      p2: "9:10 AM",
    },
    {
      image:
        "https://adminpro-free-nuxtjs.netlify.app/images/users/3.jpg",
      color: "#ACACAC",
      title: "Arijit Sinh",
      p1: "I am a singer!",
      p2: "9:08 AM",
    },
    {
      image:
        "https://flexy-next-js-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.b99dc84d.jpg&w=640&q=75",
        color: "#ACACAC",
      title: "Sam Kart",
      p1: "Just see the my admin!",
      p2: "9:02 AM",
    },
  ];

  const notiHandler = () => {
    if (message || isMenuOpen) {
      setMessage(false);
      setIsMenuOpen(false);
    }
    setNoti(!noti);
  };

  const messageHandler = () => {
    if (noti || isMenuOpen) {
      setNoti(false);
      setIsMenuOpen(false);
    }
    setMessage(!message);
  };

  const profileMenuHandler = () => {
    if (noti || message) {
      setNoti(false);
      setMessage(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };
  
  const username = sessionStorage.getItem("username");
  const logoutHandler = () => {
    sessionStorage.removeItem("username");
    nav("/login");
  };

  return (
    <ul className="my-2 mb-0 mt-0 flex flex-wrap items-center gap-2 me-5 py-[10px]">
      <div className="relative flex">
        <TfiEmail
          className={`text-[21px] cursor-pointer hover:text-[var(--hover-nav-icon-color)] ${ noti ? "text-[var(--hover-nav-icon-color)]" : "text-[var(--nav-icon-color)]"}`}
          onClick={notiHandler}
        />
        <span className="animate-ping absolute w-[16px] h-[16px] border border-5 border-[#d32f2f] rounded-full -top-[10px] -right-[4px] bg-[#d32f2f] z-10 "></span>
        <span className="relative w-[8px] h-[8px] border border-5 border-[#d32f2f] rounded-full -top-[5px] right-[1px] bg-[#d32f2f]"></span>

        <div
          className={
            noti
              ? "relative animate__animated animate__bounceInDown"
              : " hidden"
          }
        >
          <div className={` w-[305px] h-[428] bg-white absolute top-[40px] -right-[7.5rem] md:top-[48px] md:-right-[15px] border border-[#e9ecef] rounded z-10 text-black`}> {/* -right-[7.7rem] -right-[70px] */}
              <ul>
              <li className=" px-[20px] py-[15px] text-[15px] font-semibold border-b border-b-[#e9ecef]">
                Notification
              </li>
              <li>
                <div className="h-[317px] overflow-y-scroll overflow-x-hidden">
                  {notiItems.map((item, i) => {
                    return (
                      <div
                        className="flex border-b border-b-[#e9ecef] "
                        key={i}
                      >
                        <div className="flex items-center py-[9px] px-[15px] gap-4">
                          <div
                            className={` bg-[${item.color}] border-[${item.color}] rounded-full w-[40px] h-[40px] p-[10px]`}
                          >
                            <div className="z-20 text-white text-center text-[14px] font-extrabold m-[2px]">
                              {item.icon}
                            </div>
                          </div>
                          <div className="text-[#212529]">
                            <h1 className=" tracking-wide text-[18px] font-medium">
                              {item.title}
                            </h1>
                            <p className="text-[14px] text-ellipsis">
                              <span>{item.p1} </span>
                            </p>
                            <p className="text-[14px]">{item.p2}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </li>
              <li className=" flex justify-center items-center px-[20px] py-[15px] text-[15px] font-semibold border-b border-b-[#e9ecef] cursor-pointer hover:text-[var(--hover-nav-icon-color)]">
                <p className="">Check all Notifications </p>
                <MdChevronRight className=" font-bold" />
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className="relative flex">
        <EditNoteIcon
          className={`text-[30px] cursor-pointer hover:text-[var(--hover-nav-icon-color)] ${ message ? "text-[var(--hover-nav-icon-color)]" : "text-[var(--nav-icon-color)]"}`}
          onClick={messageHandler}
        />
        <span className="animate-ping absolute w-[16px] h-[16px] border border-5 border-[#d32f2f] rounded-full -top-[6px] right-[5px] bg-[#d32f2f] z-10 "></span>
        <span className="relative w-[8px] h-[8px] border border-5 border-[#d32f2f] rounded-full -top-[2px] right-[9px] bg-[#d32f2f]"></span>

        <div
          className={
            message
              ? "relative animate__animated animate__bounceInDown"
              : " hidden"
          }
        >
          <div className=" w-[305px] h-[428] bg-white absolute top-[40px] -right-[5rem] md:top-[48px] md:-right-[15px] border border-[#e9ecef] rounded z-10 text-black">
            <ul>
              <li className=" px-[20px] py-[15px] text-[15px] font-semibold border-b border-b-[#e9ecef]">
                You have 4 new messages
              </li>
              <li>
                <div className="h-[317px] overflow-y-scroll overflow-x-hidden">
                  {messageItems.map((item, i) => {
                    return (
                      <div
                        className="flex border-b border-b-[#e9ecef] "
                        key={i}
                      >
                        <div className="flex items-center py-[9px] px-[15px] gap-4">
                          <div
                            className={`  rounded-full w-[70px] h-[70px] p-[10px]`} /*  w-[40px] h-[40px] bg-[${item.color}] border-[${item.color}] */
                          >
                            <div className="z-20 text-white text-center text-[14px] font-extrabold m-[2px] ">
                              <img
                                src={item.image}
                                className="rounded-full"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="text-[#212529]">
                            <h1 className=" tracking-wide text-[18px] font-medium ">
                              {item.title}
                            </h1>
                            <p className="text-[14px]  text-ellipsis">
                              <span>{item.p1} </span>
                            </p>
                            <p className="text-[14px]">{item.p2}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </li>
              <li className=" flex justify-center items-center px-[20px] py-[15px] text-[15px] font-semibold border-b border-b-[#e9ecef] cursor-pointer hover:text-[var(--hover-nav-icon-color)]">
                <p className="">Sell all e-Mails</p>
                <MdChevronRight className=" font-bold" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ProfileMenuItems
      profileMenuHandler={profileMenuHandler}
        isMenuOpen={isMenuOpen}
        minmin={minmin}
      />
    </ul>
  );
}

const NavbarMini = ({userInfos, minmin}) => {
  const theme = useTheme();

  return (
    <AppBar
        position="fixed"
        className=" w-[100%] md:w-full"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` , backgroundColor: "rgb(21, 128, 61)", }} /* boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" */
      >
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-wrap items-center gap-4">
          <Toolbar>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search & enter" 
              className=" ps-5 py-1 border-dark-900 border rounded-full focus:outline-none text-black hidden md:block focus:w-[300px] duration-[2000] ease-in-out transition-all"
            />
          </Toolbar>
        </div>
        <div className="">
          <NavList minmin={minmin}/> 
        </div>
      </div>
    </AppBar>
  );
};

export default NavbarMini;
