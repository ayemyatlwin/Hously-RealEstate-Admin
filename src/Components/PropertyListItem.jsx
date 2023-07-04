import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import AllCard from "./AllCard";
import { useGetPropertyQuery } from "../redux/api/propertyApi";
import { Loader, Select } from "@mantine/core";
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import '../index.css'

const PropertyListItem = () => {
  const { data: property, isLoading } = useGetPropertyQuery();
  const [rValue, setRValue] = useState(null);
  const [tValue, setTValue] = useState(null);
  const [P, setP] = useState();
  const [pData, setPData] = useState(property);
  const [currentPage, setCurrentPage] = useState(1);
  const [records, setRecords] = useState([]);
  const [npage, setNpage] = useState();
  const [numbers, setNumbers] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    SeeAllHandler();
    setBtnLoading(false);
  }, []);

  useEffect(() => {
    SeeAllHandler();
    setBtnLoading(false);
  }, [property]);

  useEffect(() => {
    console.log("npage", npage);
    console.log("record", records);
    console.log("num", numbers);
  }, [records]);

  const SeeAllHandler = () => {
    setSearchToggle(false);
    setBtnLoading(true);
    setPData(property);
    setCurrentPage(1);
    pagi(pData);
  };

  const SearchHandler = () => {
    setBtnLoading(true);
    if (
      rValue === null ||
      rValue === "" ||
      (rValue === undefined && tValue !== "")
    ) {
      const aa = pData.filter((a) => a.propertyType.toLowerCase() === tValue);
      setData(aa);
    } else if (rValue === "sale" && tValue !== "") {
      const aa = pData.filter(
        (a) =>
          a.propertyType.toLowerCase() === tValue &&
          a.type.toLowerCase() === "sale"
      );
      setData(aa);
    } else if (rValue === "rent" && tValue !== "") {
      const aa = pData.filter(
        (a) =>
          a.propertyType.toLowerCase() === tValue &&
          a.type.toLowerCase() === "rent"
      );
      setData(aa);
    } else if (rValue === "sale" && tValue === "") {
      const aa = pData.filter((a) => a.type.toLowerCase() === "sale");
      setData(aa);
    } else if (rValue === "rent" && tValue === "") {
      const aa = pData.filter((a) => a.type.toLowerCase() === "rent");
      setData(aa);
    }
  };

  const setData = (aa) => {
    setP(aa);
    setCurrentPage(1);
    pagi(aa);
    setSearchToggle(true);
    setRValue("");
    setTValue("");
    scrollYHandler();
  };

  const pagi = (pro) => {
    setTimeout(() => {
          const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = pro.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pro.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    setRecords(records);
    setNpage(npage);
    setNumbers(numbers);
    setBtnLoading(false);
  }, 1000);

  };

  useEffect(() => {
    console.log("Rval", rValue, "tval", tValue);
  }, [rValue, tValue]);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      pagiNum();
    }
    scrollYHandler();
  }
  function changeCPage(id) {
    if (currentPage == id) {
      return;
    } else {
      setCurrentPage(id);
      pagiNum();
      scrollYHandler();
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      pagiNum();
    }
    scrollYHandler();
  }
  const pagiNum = () => {
    if (searchToggle) {
      pagi(P);
    } else {
      pagi(pData);
    }
  };
  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        {/* <Loader variant="dots" color="green" /> */}
        <div className="custom-loader"></div>
      </div>
    );
  }

  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  return (
    <div className={` bg-[#EDF1F5]`}>
      <div className=" flex flex-col lg:flex-row justify-start gap-5 items-start">
        <div className="w-full lg:basis-4/12 bg-white px-4 md:px-5 py-5 sticky top-14 lg:top-20 left-0 z-30">
          <Select
            placeholder="Status"
            value={rValue}
            onChange={setRValue}
            data={[
              { value: "rent", label: "Rent" },
              { value: "sale", label: "Sale" },
            ]}
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: theme.colors.green[8],
                    color: theme.white,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
          />
          <Select
            className=" my-5"
            placeholder="Type"
            value={tValue}
            onChange={setTValue}
            data={[
              { value: "apartment", label: "Apartment" },
              { value: "villa", label: "Villa/Mansion" },
              { value: "cottage", label: "Cottage" },
              { value: "flat", label: "Flat" },
              { value: "house", label: "House" },
            ]}
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: theme.colors.green[8],
                    color: theme.white,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
          />
          <button
            onClick={SearchHandler}
            className="w-full flex justify-center my-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded border-none cursor-pointer"
          >
            <BiSearchAlt className="xs:mb-[4px] md:mb-1 sm:text-lg me-1 mt-[2px]" />
            Search
          </button>
          <button
            onClick={SeeAllHandler}
            className="w-full  py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded border-none cursor-pointer"
          >
            See all
          </button>
        </div>
        {btnLoading ? (
          <div className="w-full lg:basis-8/12 flex justify-center items-center h-screen">
        <div className="custom-loader"></div>

          </div>
        ) : (
          <div className={`  w-full lg:basis-8/12`}>
            {/* All Card Start*/}
            <div
              className={` w-full flex flex-wrap gap-3 sm:gap-5 justify-center items-center`}
            >
              {records?.length >= 1 ? (
                records.map((allProperty) => {
                  return <AllCard key={allProperty.id} {...allProperty} />;
                })
              ) : (
                <div className="w-full lg:basis-8/12 flex justify-center items-center h-screen">
                  <h1 className=" text-lg ">No Records Yet.</h1>
                </div>
              )}
            </div>
            {/* All Card End*/}

            {/* Pagination Start*/}

            <div className={`${records.length < 1 ? "hidden" : ""} my-5 flex justify-center`}>
              <ul
                className={`${
                  npage > 1 ? "flex" : "hidden"
                } items-center gap-1 lg:gap-3`}
              >
                {currentPage == 1 ? (
                  <li className=" flex items-center gap-2 mr-2 hover:bg-gray-300">
                    
                    <a href="#">
                    <IoIosArrowBack strokeWidth={2} size={'2rem'} className=" w-6" />
                    </a>
                  </li>
                ) : (
                  <li className=" flex items-center gap-2 mr-2 hover:bg-gray-300">
                    <a href="#" onClick={prevPage}>
                    <IoIosArrowBack strokeWidth={2} size={'2rem'} className=" w-6" />
                      
                    </a>
                  </li>
                )}
                <div className="flex items-center gap-1">
                  {numbers.length > 1 ? (
                    numbers.map((n, i) => {
                      return (
                        <Button
                          variant="text"
                          color="blue-gray"
                          className={`${
                            currentPage === n ? "active" : ""
                          } list-none text-center rounded-none p-1 `}
                          key={i}
                        >
                          <p
                            className=" p-3"
                            onClick={() => changeCPage(n)}
                          >
                            {n}
                          </p>
                        </Button>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
                {currentPage === npage ? (
                  <li className=" flex items-center gap-2 ml-2 hover:bg-gray-300">
                    
                    <a href="#">
                    <IoIosArrowForward strokeWidth={2} size={'2rem'} className="w-6" />
                    </a>
                  </li>
                ) : (
                  <li className=" flex items-center gap-2 ml-2 hover:bg-gray-300">
                    <a href="#" onClick={nextPage}>
                    <IoIosArrowForward strokeWidth={2} size={'2rem'} className="w-6" />
                      
                    </a>
                  </li>
                )}
              </ul>
            </div>
            {/* Pagination End*/}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListItem;
