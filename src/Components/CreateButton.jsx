import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateButton = () => {
  return (
    <div className="hidden md:block">
      <button className=" px-3 py-2 bg-[#16803C] rounded text-white capitalize hover:bg-green-700 ">
        <AddCircleIcon className="me-[2px] mb-[2px]" fontSize="14px" />
        <span className="text-[15px] font-medium">create new</span>
      </button>
    </div>
  );
};

export default CreateButton;
