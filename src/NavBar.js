import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home as HomeIcon,
  MenuBook as MenuBookIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import Header from "./Header";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <List>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === "/"}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/blog"
            selected={location.pathname === "/blog"}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/team"
            selected={location.pathname === "/team"}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Team" />
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default NavBar;
