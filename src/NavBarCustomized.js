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
  Group as GroupIcon
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import Header from "./Header";

const NavBarCustomized = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        sx={{ bgcolor: "primary.dark" }}
      >
        <List>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === "/"}
            sx={{ "&.Mui-selected": { bgcolor: "secondary.main" } }}
          >
            <ListItemIcon sx={{ color: "primary.light" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: "text.primary" }} />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/blog"
            selected={location.pathname === "/blog"}
            sx={{ "&.Mui-selected": { bgcolor: "secondary.main" } }}
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
            sx={{ "&.Mui-selected": { bgcolor: "secondary.main" } }}
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

export default NavBarCustomized;
