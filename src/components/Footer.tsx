import React from "react";
import tmdbLogo from "../images/tmdb_logo.svg";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    containerHeader: {
      display: "flex",
      marginTop: "auto",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "solid 3px",
      borderTopColor: "#90cea1",
      height: 100,
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.containerHeader}>
      <img src={tmdbLogo} alt="TMDB_Logo" style={{ width: 100 }} />
    </footer>
  );
};

export default Footer;
