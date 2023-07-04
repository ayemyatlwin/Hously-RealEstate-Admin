import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { AiFillStar } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardBgBlock from "../Components/CardBgBlock";

const drawerWidth = 64;

const ClientsDetails = () => {
  const location = useLocation();
  const clientData = location.state;
  console.log(clientData);
  return (
    <Dashboard>
      {/* home section */}
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF] `}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">
            customer detail
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
              <Link to={"/customer"}>
                <p
                  // onClick={() => handler()}
                  className=" capitalize cursor-pointer text-[#212529] text-[13px]"
                >
                  customer
                </p>
              </Link>
              <p className=" capitalize text-green-700  text-[13px]">
                {clientData?.firstName + " " + clientData?.lastName}
              </p>
            </Breadcrumbs>
            
          </div>
        </div>
      </div>


      <div className="mx-auto md:px-10  my-5 ">
    <Link to={"/customer"}>
      <div className="px-3 md:px-0">
        <MdArrowBack className="w-7 h-7" />
      </div>
    </Link>
    <div className=" flex flex-col md:flex-row items-center justify-center mx-0  md:gap-3">
      <div className=" basis-1/2 md:basis-1/4 mx-auto my-5">
        <CardBgBlock  clientData={clientData} />
      </div>
      <Card
        shadow={false}
        className=" basic-1/2 md:basis-3/4 mx-auto my-5 w-72 md:w-60 lg:w-96 rounded-none bg-[#fafafa]"
      >
        <div className="flex flex-col md:flex-row">
          <div className=" basis-1/2 px-4 py-2">
            <p className=" text-sm text-gray-600">Full Name</p>
            <p className=" text-sm  font-semibold">
              {clientData?.firstName + " " + clientData?.lastName}
            </p>
          </div>
          <div className=" basis-1/2 px-4 py-2">
            <p className=" text-sm text-gray-600">Phone </p>
            <p className=" text-sm  font-semibold">{clientData?.phone}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" basis-1/2 px-4 py-2">
            <p className=" text-sm text-gray-600">Email</p>
            <p className=" text-sm  font-semibold">{clientData?.email}</p>
          </div>
          <div className=" basis-1/2 px-4 py-2">
            <p className=" text-sm text-gray-600">Address </p>
            <p className=" text-sm  font-semibold">
              {" "}
              {clientData?.address?.address}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" basis-1/2 px-4 py-2">
            <p className=" text-sm text-gray-600">Job </p>
            <p className=" text-sm  font-semibold">{clientData?.company?.title}</p>
          </div>
          <div className=" basis-1/2 px-4 py-2">
            <p className=" text-sm text-gray-600">Company</p>
            <p className=" text-sm  font-semibold">{clientData?.company?.name}</p>
          </div>
        </div>
      </Card>
    </div>
    <div className=" flex flex-col md:flex-row md:gap-x-3">
     
        <Card shadow={false} className="basis-1/2  mx-auto my-5 w-72 md:w-60 lg:w-96 rounded-none bg-transparent">
          <Typography variant="h4" className=" ps-1">
            Transaction History
          </Typography>
          <div className="flex flex-col ">
            <div className="basis-1/2 ps-2 py-2">
              <p className="text-sm text-gray-600">Transaction date</p>
              <p className=" font-semibold">
                {clientData?.company?.transactionDate}
              </p>
            </div>
            <div className="basis-1/2 ps-2 py-2">
              <p className="text-sm text-gray-600">Bank Account</p>
              <p className=" font-semibold">
                {clientData?.company?.cardNumber}
              </p>
            </div>
            <div className="basis-1/2 ps-2 py-2">
              <p className="text-sm text-gray-600">
                Deal Status - currently
              </p>
              <p className=" font-semibold">
                {clientData?.company?.dealStatus}
              </p>
            </div>
          </div>
        </Card>
     
      
        <Card shadow={false} className=" basic-1/2 mx-auto my-5 w-72 md:w-60 lg:w-96 rounded-none bg-transparent">
          <Typography variant="h4" className=" ps-1">
            Reviewed by {clientData?.firstName}
          </Typography>
          <div className="flex flex-col ">
            <div className="basis-1/2 ps-2 py-2">
              <p className=" flex flex-row gap-2">
                <span>
                  <AiFillStar className="text-yellow-600 mt-1" />
                </span>
                <span className=" font-semibold">
                  {clientData?.review?.rating}/5
                </span>
              </p>
            </div>
            <div className="basis-1/2 px-4 py-2">
              <p className=" italic">
                <span>` {clientData?.review?.written}`</span>
              </p>
            </div>
          </div>
        </Card>
     
    </div>
  </div>
    </Dashboard>
  );
};

export default ClientsDetails;
