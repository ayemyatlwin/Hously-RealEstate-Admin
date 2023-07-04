import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import SidebarItems from "./SidebarItems";

const drawerWidth = 64;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const SidebarMini = ({userInfos, minmin}) => {
  
  const [profileState, setProfileState] = useState(true);
  const username = sessionStorage.getItem("username");
  const logoutHandler = () => {
    sessionStorage.removeItem("username");
    nav("/login");
  };

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "1px 0 20px rgba(0,0,0,.08)",
            border: 0,
            backgroundColor: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className=" bg-[rgba(22, 163, 74, 0.05)] border-0"
          // sx={{ backgroundColor: "rgba(22, 163, 74, 0.05)", border: 0 }}
        >
          <div className=" px-3 pt-2"
          >
            
              <img className=" w-[60px] h-[35px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEQzVEOUVBRjk1RTFFQzExOUIxQURGOUM1RjREN0YyNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQjg5NzM0QkUxOTUxMUVDQTE0Q0U4RTBFRUJBMzcwQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQjg5NzM0QUUxOTUxMUVDQTE0Q0U4RTBFRUJBMzcwQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDVEOUVBRjk1RTFFQzExOUIxQURGOUM1RjREN0YyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQzVEOUVBRjk1RTFFQzExOUIxQURGOUM1RjREN0YyNiIvPiA8L3JkZjpEZXNjcmlwdGlv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"
                alt="logo"
                loading="lazy"
              />
           
          </div>
          <p className="font-bold text-md text-center">hously</p>
        </div>
        {/* <Toolbar /> */}
        {/* <Divider /> */}

        <SidebarItems/>
      </Drawer>
  );
};

export default SidebarMini;
