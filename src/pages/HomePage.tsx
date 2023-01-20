import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import WhatIsPopular from "../components/WhatIsPopular";
import WhatIsTopRated from "../components/WhatIsTopRated";
import UpcomingMovies from "../components/UpcomingMovies";
import wallpaper from "../images/home-page-wallpaper.jpg";
import InputSearchComponent from "../components/InputSearchComponent";

const useStyles = makeStyles(() =>
  createStyles({
    containerSections: {
      padding: 24,
    },
    containerWelcomeSection: {
      height: "120vh",
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.containerWelcomeSection}>
        <InputSearchComponent />
      </Box>
      <Box className={classes.containerSections}>
        <Typography variant="h3">What's popular</Typography>
        <WhatIsPopular />
      </Box>
      <Box className={classes.containerSections}>
        <Typography variant="h3">What's top rated</Typography>
        <WhatIsTopRated />
      </Box>
      <Box className={classes.containerSections}>
        <Typography variant="h3">Upcoming movies</Typography>
        <UpcomingMovies />
      </Box>
    </Box>
  );
};

export default HomePage;
