import React from "react";
import tmdbLogo from "../images/tmdb_logo.svg";

const Footer = () => {
  return (
    <footer style={{ display: "flex", marginTop: "auto" }}>
      <img src={tmdbLogo} alt="TMDB_Logo" style={{ width: 100 }} />
    </footer>
  );
};

export default Footer;
