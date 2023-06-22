import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link, useLocation } from "react-router-dom";

import HistoryDrawer from "./HistoryDrawer";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ bgcolor: "primary.dark" }}>
        <Toolbar>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              bgcolor: location.pathname === "/" ? "secondary.main" : "",
              color: "text.primary",
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/blog"
            sx={{
              bgcolor: location.pathname === "/blog" ? "secondary.main" : "",
            }}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/team"
            sx={{
              bgcolor: location.pathname === "/team" ? "secondary.main" : "",
              color: "secondary.dark",
            }}
          >
            Team
          </Button>
          <Button
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
              color: "primary.light",
            }}
          >
            History
          </Button>
        </Toolbar>
      </AppBar>
      <HistoryDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
    </React.Fragment>
  );
};

export default NavBar;
