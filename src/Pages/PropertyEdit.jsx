import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useEditPropertyMutation,
  useGetDetailPropertyQuery,
} from "../redux/api/propertyApi";
import { Loader } from "@mantine/core";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../Components/Footer";

const PropertyEdit = () => {
  const { id } = useParams();
  const { data: property, isLoading } = useGetDetailPropertyQuery(id);
  const nav = useNavigate();
  const [editProperty] = useEditPropertyMutation();

  const [addressLine1, setAddressLine1] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [description, setDescription] = useState("");
  const [livingRoom, setLivingRoom] = useState("");
  const [bedRoom, setBedRoom] = useState("");
  const [diningRoom, setDiningRoom] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [listedDate, setListedDate] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setPropertyType(property?.propertyType);
    setStatus(property?.status);
    setAddressLine1(property?.addressLine1);
    setFormattedAddress(property?.formattedAddress);
    setCity(property?.city);
    setState(property?.state);
    setPrice(property?.price);
    setBedrooms(property?.bedrooms);
    setBathrooms(property?.bathrooms);
    setSquareFootage(property?.squareFootage);
    setYearBuilt(property?.yearBuilt);
    setDescription(property?.description);
    setLivingRoom(property?.livingRoom);
    setBedRoom(property?.bedRoom);
    setDiningRoom(property?.diningRoom);
    setKitchen(property?.kitchen);
    setCreatedDate(property?.createdDate);
    setListedDate(property?.listedDate);
    setType(property?.type);
  }, [property]);

  const editHandler = (e) => {
    e.preventDefault();
    const newData = {
      id,
      addressLine1,
      formattedAddress,
      city,
      state,
      price,
      bedrooms,
      bathrooms,
      squareFootage,
      yearBuilt,
      description,
      livingRoom,
      bedRoom,
      diningRoom,
      kitchen,
      listedDate,
      createdDate,
      type,
      propertyType,
      status,
    };
    console.log(newData);
    editProperty(newData);
    setTimeout(() => {
      nav("/");
    });
  };

  const drawerWidth = 64;

  return (
    <Dashboard>
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF] `}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">
            property edit
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
               property edit
              </p>
            </Breadcrumbs>
          </div>
        </div>
      </div>
    
    <div className=" bg-[#EDF1F5] px-3 lg:px-6 py-7">
      <div className=" mx-auto px-4 md:px-7 py-[2px] md:py-1 pb-4 bg-white "> {/* container-fluid mx-auto px-4 md:px-7 py-5 pb-20 bg-white */}
        <form onSubmit={editHandler} className=" w-full ">
          {/* Property Start*/}
          <div className=" flex flex-col gap-3 my-5">
            {/* <h2 className="text-xl">Edit Property</h2> */}
            <div className=" flex flex-col mb-3">
              <label htmlFor="">Property Address</label>
              <input
                type="text "
                defaultValue={addressLine1}
                placeholder="Enter Name"
                onChange={(e) => setAddressLine1(e.target.value)}
                className="border p-1 focus:border-blue-600  outline-none"
              />
            </div>
            <div className=" flex flex-col mb-3">
              <label htmlFor="">Property Location</label>
              <input
                type="text "
                defaultValue={formattedAddress}
                placeholder="Enter Location"
                onChange={(e) => setFormattedAddress(e.target.value)}
                className="border p-1 focus:border-blue-600  outline-none"
              />
            </div>
            <div className=" flex flex-col  mb-3">
              <label htmlFor="">Property Description</label>
              <textarea
                defaultValue={description}
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
                className="border p-1 focus:border-blue-600  outline-none h-40"
              />
            </div>
            <div className=" flex flex-col  mb-3">
              <label htmlFor="">Property Price</label>
              <input
                type="text "
                defaultValue={price}
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
                className="border p-1 focus:border-blue-600  outline-none"
              />
            </div>
            <div className=" flex flex-col lg:flex-row gap-3  mb-3">
              <div className=" w-full flex flex-col">
                <label htmlFor="">Bedrooms</label>
                <input
                  type="text "
                  defaultValue={bedrooms}
                  placeholder="eg.(1) "
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">Bath Rooms</label>
                <input
                  type="text "
                  defaultValue={bathrooms}
                  placeholder="eg.(1) "
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">Square Ft</label>
                <input
                  type="text "
                  defaultValue={squareFootage}
                  placeholder="eg.(2000) "
                  onChange={(e) => setSquareFootage(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-3  mb-3">
              <div className=" w-full flex flex-col">
                <label htmlFor="">Year Built</label>
                <input
                  type="text "
                  defaultValue={yearBuilt}
                  placeholder="Enter Year"
                  onChange={(e) => setYearBuilt(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">City</label>
                <input
                  type="text "
                  defaultValue={city}
                  placeholder="Enter City"
                  onChange={(e) => setCity(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">State</label>
                <input
                  type="text "
                  defaultValue={state}
                  placeholder="Enter State"
                  onChange={(e) => setState(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row gap-3  mb-3">
              <div className=" w-full flex flex-col">
                <InputLabel id="demo-simple-select-label">
                  <p className=" text-black">Status</p>
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className=" h-10"
                >
                  <MenuItem value={status}>
                    <p className=" capitalize ">{status}</p>
                  </MenuItem>
                  <MenuItem value="active">
                    <p className=" text-black">Active</p>
                  </MenuItem>
                  <MenuItem value="inactive">
                    <p className=" text-black">Inactive</p>
                  </MenuItem>
                </Select>
              </div>
              <div className=" w-full flex flex-col">
                <InputLabel id="demo-simple-select-label">
                  <p className=" text-black">Property Type</p>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className=" h-10 "
                >
                  <MenuItem
                    value={propertyType}
                    className=" focus:bg-green-600"
                  >
                    <p className=" text-black capitalize">{propertyType}</p>
                  </MenuItem>
                  <MenuItem value="apartment">
                    <p className=" text-black">Apartment</p>
                  </MenuItem>
                  <MenuItem value="villa">
                    <p className=" text-black">Villa</p>
                  </MenuItem>
                  <MenuItem value="cottage">
                    <p className=" text-black">Cottage</p>
                  </MenuItem>
                  <MenuItem value="flat">
                    <p className=" text-black">Flat</p>
                  </MenuItem>
                  <MenuItem value="house">
                    <p className=" text-black">House</p>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row gap-3  mb-3">
              <div className=" w-full flex flex-col">
                <label htmlFor="">Listed Date</label>
                <input
                  type="text "
                  defaultValue={listedDate}
                  placeholder="YYYY-MM-DD"
                  onChange={(e) => setListedDate(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">Created Date</label>
                <input
                  type="text "
                  defaultValue={createdDate}
                  placeholder="YYYY-MM-DD"
                  onChange={(e) => setCreatedDate(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row gap-3  mb-3">
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={type}
                name="radio-buttons-group"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <FormControlLabel
                  value="rent"
                  control={<Radio color="success" />}
                  label="For rent"
                  checked={type === "rent"}
                  color="green"
                />
                <FormControlLabel
                  value="sale"
                  control={<Radio color="success" />}
                  label="For Sale"
                  checked={type === "sale"}
                  color="green"
                />
              </RadioGroup>
            </div>
            <div className=" flex flex-col lg:flex-row gap-3 ">
              <div className=" w-full flex flex-col">
                <label htmlFor="">Living Room</label>
                <input
                  type="text "
                  defaultValue={livingRoom}
                  placeholder="eg.(10x10)"
                  onChange={(e) => setLivingRoom(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className=" w-full flex flex-col">
                <label htmlFor="">Bedroom</label>
                <input
                  type="text "
                  defaultValue={bedRoom}
                  placeholder="eg.(10x10)"
                  onChange={(e) => setBedRoom(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">Dining Room</label>
                <input
                  type="text "
                  defaultValue={diningRoom}
                  placeholder="eg.(10x10)"
                  onChange={(e) => setDiningRoom(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
              <div className="w-full  flex flex-col">
                <label htmlFor="">Kitchen</label>
                <input
                  type="text "
                  defaultValue={kitchen}
                  placeholder="eg.(10x10)"
                  onChange={(e) => setKitchen(e.target.value)}
                  className="border p-1 focus:border-blue-600  outline-none"
                />
              </div>
            </div>
          </div>
          <button
            disabled={isLoading && true}
            type="submit"
            className=" w-32 mr-2 md:w-52 my-3 md:my-5 md:mr-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-[0.25rem] border-none"
          >
            {isLoading ? (
              <div className=" flex justify-center items-center gap-1">
                <Loader color="bg-green-600" size="xs" />
                <span>Loading....</span>
              </div>
            ) : (
              "Edit property"
            )}
          </button>
          <Link to={`/propertylist`}>
            <button
              disabled={isLoading && true}
              type="submit"
              className="w-20 py-2 px-3 leading-[24px] text-white bg-gray-800 hover:bg-gray-900 border rounded-[0.25rem] border-none"
            >
              Cancel
            </button>
          </Link>

        </form>
      </div>
    </div>

    {/* footer section */}
    <Footer/>

    </Dashboard>
  );
};

export default PropertyEdit;
