import React from "react";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Chip } from "@material-tailwind/react";

const AllCard = (allProperty) => {
  const scrollYHandler = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="w-full bg-white ">
      <Link to={`/detail/${allProperty?.id}`} className="w-full flex flex-col lg:flex-row justify-start items-center relative ">
      <Chip
        className={` ${
          allProperty.type === "rent" ? "bg-green-700" : "bg-red-500"
        } absolute top-2 left-0 font-normal text-base normal-case rounded-none pb-0 z-20`}
        color="red"
        value={`${allProperty.type === "rent" ? "For rent" : "For Sale"}`}
      />
      <img
        src={allProperty.image[0]}
        className=" w-full h-52 lg:w-56 lg:h-56 object-center object-cover"
        alt=""
        loading="lazy"
      />
      
        <div
          onClick={scrollYHandler}
          className=" w-full h-fit md:basis-9/12 md:h-56 px-3 flex flex-col  bg-white "
        >
          <div className=" w-full md:basis-8/12 flex flex-col lg:flex-row md:justify-between items-center">
            <div className=" w-full md:basis-8/12 h-full md:px-5 py-5">
              <p className="font-semibold hover:text-green-700 text-[#212529]">
                {allProperty?.addressLine1}
              </p>
              <p className=" text-red-300">$ {allProperty?.price}</p>
            </div>
            <div className=" w-full md:basis-8/12 text-gray-500 md:px-5 py-5 h-full border-t-2 lg:border-t-0 lg:border-l-2 border-[#e9ecef]  ">
              <p className=" flex justify-start items-center gap-4">
                <LuBath size={"1.7rem"} />{" "}
                <span className=" text-gray-500	">Bathrooms</span>
              </p>
              <p className="	 flex justify-start items-center gap-4">
                <LuBed size={"1.7rem"} />
                Beds
              </p>
              <p className=" flex justify-start items-center gap-4">
                <GiHomeGarage size={"1.7rem"} />
                Garages
              </p>
            </div>
          </div>
          <div className=" w-full md:basis-4/12 flex gap-2 md:gap-5   justify-start items-center md:px-5 py-5 h-full  border-t-2 lg::border-t-0  border-[#e9ecef]">
            <div className=" basis-2/12">
              <img
                className="w-12 h-12 rounded-full"
                src="https://hously-react.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <div>
                <p className=" font-semibold">Jon Doe</p>
                <p className="  text-gray-500 ">5 Property</p>
              </div>

              <p className=" flex justify-start gap-2  text-gray-500  ">
                <HiLocationMarker className=" text-red-400" /> New York City
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllCard;
