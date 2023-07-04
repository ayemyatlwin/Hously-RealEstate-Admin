import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* footer section */}
      <div className=" w-full shadow-custom bg-[#FFF]">
        <div className=" text-[var(--text-color)] text-xs md:text-[15px] px-3 md:px-6 py-4">
          © 2021 Eliteadmin by themedesigner.in&nbsp;
          <Link to={"https://www.wrappixel.com/"}>
            <span className=" font-medium text-green-700 hover:text-green-800 text-xs md:text-[15px]">
              WrapPixel
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
