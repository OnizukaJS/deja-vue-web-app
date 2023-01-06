import React from "react";
import { Box, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import tmdbLogo from "../images/tmdb_logo.svg";
import HeaderMenus from "./HeaderMenus";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    containerHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      position: "fixed",
      width: "100%",
      borderBottom: "solid 3px",
      borderBottomColor: "#90cea1",
      zIndex: 10,
      background: "white",
      top: 0,
      height: 100,
    },
    containerLogo: {
      marginLeft: 16,
      cursor: "pointer",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <header className={classes.containerHeader}>
      <Box className={classes.containerLogo}>
        <img
          src={tmdbLogo}
          alt="TMDB_Logo"
          style={{ width: 100 }}
          onClick={() => navigate("/")}
        />
      </Box>

      <HeaderMenus />
    </header>
  );
};

export default Header;
