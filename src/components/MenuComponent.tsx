import React, { ReactElement, useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import MenuItemModel from "../models/MenuItemModel";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      "&:focus": {
        outline: 0,
      },
    },
  })
);

export interface MenuProps {
  menuTitle: string;
  menuItems: MenuItemModel[];
}

const MenuComponent = ({ menuTitle, menuItems }: MenuProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={classes.button}
      >
        {menuTitle}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock
      >
        {menuItems.map((item) => (
          <MenuItem onClick={item.navigateTo}>
            {item.icon}
            {item.subMenuTitle}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuComponent;
