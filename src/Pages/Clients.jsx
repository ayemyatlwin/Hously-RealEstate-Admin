import axios from "axios";
import React, { useState, useEffect } from "react";
import ClientCard from "../Components/ClientCard";
import PaginationUI from "../Components/PaginationUI";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async () => {
    const { data } = await axios.get("https://client-data.onrender.com/client");
    //console.log(data);
    setClients(data);
  };
  console.log(clients.length);
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
    window.scroll(0, 0);
  };

  const handlePrevious = () => {
    if (page === 1) return page;
    setPage(page - 1);
    window.scroll(0, 0);
  };
  //for data fetching
  useEffect(() => {
    fetchData();
  }, [page]);

  //for pagination
  useEffect(() => {
    const pageDataCount = Math.ceil(clients.length / 10); //    20/10=2
    setPageCount(pageDataCount); // 2pages

    if (page) {
      const LIMIT = 10;
      const skip = LIMIT * page; //10*1 10*2
      const dataSkip = clients.slice(page === 1 ? "0" : skip - LIMIT, skip);
      setPageData(dataSkip);
    }
  }, [clients]);

  return (
    <div className="  mx-auto">
      {clients?.length > 0 ? (
        <>
          <div className=" flex flex-wrap lg:gap-x-7 lg:gap-y-4 items-center justify-center ">
            {pageData?.map((client) => {
              return (
                <div key={client?.id} className=" my-3 px-2 lg:px-5 ">
                  <ClientCard client={client} />
                </div>
              );
            })}
          </div>
          <div className=" text-center mt-5">
            <PaginationUI
              page={page}
              pageCount={pageCount}
              setPage={setPage}
              pageData={pageData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </div>
        </>
      ) : (
        <div className="flex h-screen items-center justify-center ">
          {/* <div className="px-5 py-3 text-xs font-medium leading-none text-center text-green-800 bg-green-200 rounded-full animate-pulse ">
            loading...
          </div> */}
          <div className="custom-loader"></div>
        </div>
      )}
    </div>
  )
}

export default Clients
