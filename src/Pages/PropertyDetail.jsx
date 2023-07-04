import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

import { Carousel } from "@material-tailwind/react";
import { useNavigate, useParams, } from "react-router-dom";
import { useGetDetailPropertyQuery,useDeletePropertyMutation } from "../redux/api/propertyApi";
import { Input, Loader, Textarea } from "@mantine/core";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import CreateButton from "../Components/CreateButton";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";

const drawerWidth = 64;

const PropertyDetail = () => {
  const { id } = useParams();
  const { data: propertyDetailData, isLoading } = useGetDetailPropertyQuery(id);
  const [deleteProperty] = useDeletePropertyMutation();
  const nav = useNavigate();

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        {/* <Loader variant="dots" color="green" /> */}
        <div className="custom-loader"></div>
      </div>
    );
  }
  console.log("id", id);
  console.log("p", propertyDetailData.propertyType);

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      customClass: 'swal-wide',
      showCancelButton: true,
      confirmButtonColor: "#138A3F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Your ${propertyDetailData.propertyType} information has been deleted.`, "success");
        await deleteProperty(propertyDetailData?.id);
        setTimeout(() => {
          nav("/");
        }, 1000);
      }
    });
  };

  return (
    <Dashboard>
      {/* home section */}
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF] `}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">
          property detail
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
              <Link to={"/propertylist"}>
                <p
                  // onClick={() => handler()}
                  className=" capitalize cursor-pointer text-[#212529] text-[13px]"
                >
                  property detail
                </p>
              </Link>
              <p className=" capitalize text-green-700 text-[13px]">
                {propertyDetailData.addressLine1}
              </p>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="w-full py-6">
        <div className=" bg-[#EDF1F5] ">
          <div className=" mx-auto flex flex-col lg:flex-row justify-between items-start gap-5 px-3 md:px-5">
            <div className="basis-8/12 ">
              <div className=" mb-5 px-5 py-5 bg-white">
                <Carousel
                  className="rounded-none "
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i
                              ? "bg-white w-8"
                              : "bg-white/50 w-4"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
                >
                  {propertyDetailData?.image.map((image, i) => {
                    return (
                      <img
                        key={i}
                        src={image}
                        alt="image 1"
                        className="h-[450px] w-full object-center object-cover"
                        loading="lazy"
                      />
                    );
                  })}
                </Carousel>
                <p
                  className=" flex justify-start items-center gap-2 text-lg py-5"
                  style={{ fontWeight: "550" }}
                >
                  <HiLocationMarker className=" text-red-400 mb-2" />
                  {propertyDetailData?.formattedAddress}
                </p>
                <div className=" flex md:flex-row  gap-3">
                  <Link to={`/edit/${propertyDetailData?.id}`}>
                    <button
                      type="submit"
                      className=" w-20 md:w-32 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-[0.25rem] border-none"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className=" w-20 md:w-32 mb-5 py-2 px-3 leading-[24px] text-white bg-red-500 hover:bg-red-700 border rounded-[0.25rem] border-none"
                    onClick={() => deleteHandler(propertyDetailData?.id)}
                  >
                    Delete
                  </button>
                </div>
                <p className=" text-lg text-gray-500 border-t-2 border-gray-300 pt-5 pb-10">
                  {propertyDetailData?.description}
                </p>
              </div>
              {/*  360 degree View Start */}
              <div className=" py-5 px-5 my-5 bg-white">
                <p className=" text-lg font-semibold mb-5">360° View</p>
                <iframe
                  src={propertyDetailData?.permalink}
                  width="100%"
                  height="500px"
                  style={{ border: "0" }}
                  allowFullScreen=""
                ></iframe>
              </div>
              {/*  360 degree View End */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-stretch lg:h-full gap-5">
                {/*  Amenties Start */}

                <div className="w-full lg:basis-6/12  px-5  pt-5 py-10 bg-white">
                  <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                    Amenities
                  </p>
                  <ul className=" text-gray-500 ">
                    {propertyDetailData?.bullet.map((tag,i) => {
                      return (
                        <li
                        key={i}
                        className=" pb-2 flex gap-2 justify-start items-start">
                          <p>
                            <BsCheckCircleFill
                              className=" text-green-600 bg-white rounded-full"
                              size={"1rem"}
                            />
                          </p>
                          <p>{tag}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/*  Amenties End */}

                {/*  Room Dimension Start */}
                <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white">
                  <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                    Room Dimensions
                  </p>
                  <ul className=" text-gray-500 lg:flex flex-col gap-2">
                    <li className=" flex justify-between items-center pb-2">
                      <span>Living Room</span>
                      <span>
                        {propertyDetailData?.livingRoom == null
                          ? "9x10"
                          : propertyDetailData?.livingRoom}
                      </span>
                    </li>
                    <li className=" flex justify-between items-center pb-2">
                      <span>Bedroom</span>
                      <span>
                        {propertyDetailData?.bedRoom == null
                          ? "15x10"
                          : propertyDetailData?.bedRoom}
                      </span>
                    </li>
                    <li className=" flex justify-between items-center pb-2">
                      <span>Dining Room</span>
                      <span>
                        {propertyDetailData?.diningRoom == null
                          ? "7x15"
                          : propertyDetailData?.diningRoom}
                      </span>
                    </li>
                    <li className=" flex justify-between items-center pb-2">
                      <span>Kitchen</span>
                      <span>
                        {propertyDetailData?.kitchen == null
                          ? "9x10"
                          : propertyDetailData?.kitchen}
                      </span>
                    </li>
                  </ul>
                </div>
                {/*  Room Dimension Start */}
              </div>
              {/*  Location Start */}
              <div className=" py-5 px-5 my-5 bg-white">
                <p className=" text-lg font-semibold mb-5">Location</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117506.98606137399!2d72.5797426!3d23.020345749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1476988114677"
                  width="100%"
                  height="244"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                ></iframe>
              </div>
              {/*  Location End */}
            </div>
            <div className="w-full lg:basis-4/12">
              {/*  Essential Information Start */}
              <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white">
                <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                  Essential Information
                </p>
                <ul className=" text-gray-500">
                  <li className=" flex justify-between items-center pb-2">
                    <span>MLS</span>
                    <span>V254680</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Price</span>
                    <span>$ {propertyDetailData?.price}</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Bedrooms</span>
                    <span>
                      {propertyDetailData?.bedrooms == null
                        ? "1"
                        : propertyDetailData?.bedrooms}
                    </span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Bathrooms</span>
                    <span>
                      {propertyDetailData?.bathrooms == null
                        ? "1"
                        : propertyDetailData?.bathrooms}
                    </span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Square Footage</span>
                    <span>{propertyDetailData?.squareFootage}</span>
                  </li>

                  <li className=" flex justify-between items-center pb-2">
                    <span>Year Build</span>
                    <span>
                      {propertyDetailData?.yearBuilt == null
                        ? "1995"
                        : propertyDetailData?.yearBuilt}
                    </span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Type</span>
                    <span>{propertyDetailData?.propertyType}</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Status</span>
                    <span>{propertyDetailData?.status}</span>
                  </li>
                </ul>
              </div>
              {/*  Essential Information Start */}

              {/*  Request inquiry Start */}
              <div className="w-full lg:basis-6/12 flex flex-col px-5  pt-5 py-10 bg-white mt-5">
                <div className="flex flex-col items-center mb-5">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/agent.jpg"
                    alt=""
                  />
                  <p className=" text-xl pt-3">Jon Doe</p>
                  <p className=" text-gray-800 ">Agent of Property</p>
                </div>
                <div className="flex flex-col items-center border-y-2 border-gray-400 py-5 text-gray-800">
                  <p className=" flex justify-start gap-2">
                    <AiOutlinePhone className=" text-red-400" /> 800-1800-24657
                  </p>
                  <p className="">jon@realestate.com</p>
                </div>
                <div>
                  <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 py-5">
                    Request Inquiry
                  </p>
                  <div className=" flex flex-col gap-4 my-5">
                    <Input placeholder="Name" size="md" />
                    <Input placeholder="Phone" size="md" />
                    <Input placeholder="Email" size="md" />
                    <Textarea placeholder="Message" size="md" withAsterisk />
                  </div>
                  <button className=" py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-full border-none cursor-pointer">
                    Submit Request
                  </button>
                </div>
              </div>
              {/*  Request Inquiry Start */}

              {/*  Community  Information Start */}
              <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white mt-5">
                <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                  Community Information
                </p>
                <ul className=" text-gray-500">
                  <li className=" flex justify-between items-center pb-2">
                    <span>Address</span>
                    <span>{propertyDetailData?.addressLine1}</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Price</span>
                    <span>${propertyDetailData?.price}</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>State</span>
                    <span>{propertyDetailData?.state}</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>City</span>
                    <span>{propertyDetailData?.city}</span>
                  </li>

                  <li className=" flex justify-between items-center pb-2">
                    <span>Create Date</span>
                    <span>{propertyDetailData?.createdDate.substring(0, 10)}</span>
                  </li>
                  <li className=" flex justify-between items-center pb-2">
                    <span>Listed Date</span>
                    <span>{propertyDetailData?.listedDate.substring(0, 10)}</span>
                  </li>
                </ul>
              </div>
              {/*  Community  Information Start */}
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </Dashboard>
  );
};

export default PropertyDetail;
