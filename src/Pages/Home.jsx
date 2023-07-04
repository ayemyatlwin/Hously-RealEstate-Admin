import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import VillaIcon from "@mui/icons-material/Villa";
import SellIcon from "@mui/icons-material/Sell";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";
import CreateButton from "../Components/CreateButton";
import Dashboard from "./Dashboard";
import BarChart from "../Components/BarChart";
import { BiCircle } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import BarChartSale from "../Components/BarChartSale";
import BarChartRent from "../Components/BarChartRent";
import PropertyOverview from "../Components/PropertyOverview";
import Footer from "../Components/Footer";
import { useGetPropertyQuery } from "../redux/api/propertyApi";

const drawerWidth = 64;

const Home = () => {
  const { data: property } = useGetPropertyQuery();
  // console.log(property)

  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const [rent, setRent] = useState(0);

  useEffect(() => {
    if (
      property !== undefined &&
      property?.length !== 0
    ) {
      setTotal(property.length);

      const ss = property.filter((p) => p.type.toLowerCase() === "sale");
      if (
        ss !== undefined &&
        ss?.length !== 0
      ) {
        setSale(ss.length);
      }

      const rr = property.filter((p) => p.type.toLowerCase() === "rent");
      if (
        rr !== undefined &&
        rr?.length !== 0
      ) {
        setRent(rr.length);
      }
      }
  },[property]);

  return (
    <Dashboard>
      {/* home section */}
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF] `}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">
            real estate dashboard
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
                real estate dashboard
              </p>
            </Breadcrumbs>
            <Link to={"/create"}>
              <CreateButton />
            </Link>
          </div>
        </div>
      </div>

      {/* grid , px-6*/}
      <div className="w-full px-3 md:px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white">
            <div className=" p-[20px]">
              <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)]">
                all properties
              </h1>
              <div className="flex-between-center mt-[10px] mb-[10px]">
                <VillaIcon sx={{ color: "#03a9f3", fontSize: "36px" }} />
                <p className=" text-[36px] text-[#6c757d]">{total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className=" p-[20px]">
              <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)]">
                properties for sale
              </h1>
              <div className="flex-between-center mt-[10px] mb-[10px]">
                <SellIcon
                  className="rotate-[90deg]"
                  sx={{ color: "#ab8ce4", fontSize: "36px" }}
                />
                <p className=" text-[36px] text-[#6c757d]">{sale}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className=" p-[20px]">
              <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)]">
                properties for rent
              </h1>
              <div className="flex-between-center mt-[10px] mb-[10px]">
                <ShoppingCartIcon sx={{ color: "#e46a76", fontSize: "36px" }} />
                <p className=" text-[36px] text-[#6c757d]">{rent}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className=" p-[20px]">
              <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)]">
                total earnings
              </h1>
              <div className="flex-between-center mt-[10px] mb-[10px]">
                <AccountBalanceWalletIcon
                  sx={{ color: "#4caf50", fontSize: "36px" }}
                />
                <p className=" text-[36px] text-[#6c757d]">$8170</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="w-full px-3 md:px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-12 lg:col-span-8 ">
            <div className="bg-white p-[20px]">
              <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center mb-0 md:mb-4">
                <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)] mb-3">
                  properties stats
                </h1>
                <div className="flex items-center gap-2 -mt-3 mb-7 md:mb-0">
                  <BsCircleFill fill="#B8ECF0" className=" text-xs md:text-md" />
                  <span className=" text-xs md:text-sm text-[var(--text-color)]">
                    For Sale
                  </span>
                  <BsCircleFill fill="#B3C1D7" className=" text-xs md:text-md" />
                  <span className=" text-xs md:text-sm text-[var(--text-color)]">
                    For Rent
                  </span>
                  <BsCircleFill fill="#FCC9BA" className=" text-xs md:text-md" />
                  <span className=" text-xs md:text-sm text-[var(--text-color)]">All</span>
                </div>
              </div>
              <BarChart />
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex flex-col gap-5">
              <div className="bg-white p-[20px]">
                <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)]"> 
                  property sales income
                </h1>
                <div className="flex flex-wrap justify-between items-end">
                  <div className=" w-1/2">
                    <p className=" text-[36px] text-[#03a9f3] mb-1">$64057</p>
                    <p className=" uppercase text-[#6c757d] mb-2 text-sm">
                      january 2023
                    </p>
                    <p className=" font-medium text-[var(--text-color)] pt-1 pb-2">
                      (150 Sales)
                    </p>
                  </div>
                  <div className=" w-1/2">
                    <BarChartSale />
                  </div>
                </div>
              </div>
              <div className="bg-[#ab8ce4] p-[20px]">
                <h1 className="uppercase text-[16px] font-semibold text-white ">
                  property on rent income
                </h1>
                <div className="flex flex-wrap justify-between items-end">
                  <div className=" w-1/2">
                    <p className=" text-[36px] text-white mb-1 ">$30447</p>
                    <p className=" uppercase text-white mb-2 text-sm">
                      january 2023
                    </p>
                    <p className=" font-medium text-white pt-1 pb-2">(110 Sales)</p>
                  </div>
                  <div className=" w-1/2 ">
                    <BarChartRent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* property overview */}
      <div className="w-full px-3 md:px-6 py-6">
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white p-[20px]">
            <h1 className="uppercase text-[16px] font-semibold text-[var(--text-color)] mb-3">
              property overview
            </h1>
            <div className=" overflow-x-auto">
              <PropertyOverview />
            </div>
          </div>
        </div>
      </div>
      
      {/* footer section */}
      <Footer/>
      
    </Dashboard>
  );
};

export default Home;
