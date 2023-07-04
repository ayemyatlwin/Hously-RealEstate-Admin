import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const PaginationUI = ({
  page,
  setPage,
  handleNext,
  handlePrevious,
  pageCount,
}) => {
  return (
    <div>
      <ul className="inline-flex items-center ">
        {/* previousHandlerButton-start */}
        <li>
          {page == 1 ? (
            <button className=" px-3 py-2 leading-tight  bg-[#fafafa] border border-gray-300 rounded-l-lg cursor-not-allowed ">
              <GrPrevious className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handlePrevious}
              className=" px-3 py-2 leading-tight  bg-[#fafafa] border border-gray-300 rounded-l-lg hover:bg-gray-300 "
            >
              <GrPrevious className="w-5 h-5" />
            </button>
          )}
        </li>
        {/* previousHandlerButton-end */}

        {/* numberButtonsHere */}
        {Array(pageCount)
          .fill(null)
          .map((ele, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    setPage(index + 1);
                    window.scroll(0, 0);
                  }}
                  className="px-3 py-2 leading-tight   bg-[#fafafa] border border-gray-300 hover:bg-gray-300  "
                >
                  {index + 1}
                </button>
              </li>
            );
          })}

        {/* nextHandlerButton-start */}
        <li>
          {page === pageCount ? (
            <button className=" px-3 py-2 leading-tight  bg-[#fafafa] border border-gray-300 rounded-r-lg cursor-not-allowed  ">
              <GrNext className="w-5 h-5  " />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className=" px-3 py-2 leading-tight  bg-[#fafafa] border border-gray-300 rounded-r-lg hover:bg-gray-300  "
            >
              <GrNext className="w-5 h-5  " />
            </button>
          )}
        </li>
        {/* nextHandlerButton-end */}
      </ul>
    </div>
  );
};

export default PaginationUI;