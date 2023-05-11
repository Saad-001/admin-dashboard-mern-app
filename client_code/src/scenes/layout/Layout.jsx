import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/navbar/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "src/components/sidebar/Sidebar";
import { useGetUserQuery } from "src/redux/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [openSidebar, setOpenSidebar] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
