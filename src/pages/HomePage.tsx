import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import WhatIsPopular from "../components/WhatIsPopular";
import WhatIsTopRated from "../components/WhatIsTopRated";
import UpcomingMovies from "../components/UpcomingMovies";

const useStyles = makeStyles((theme) =>
  createStyles({
    containerSections: {
      padding: 24,
    },
    containerWelcomeSection: {
      // backgroundImage: `url(${wallpaper})`,
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.containerWelcomeSection}>
        <Typography variant="h3">Home Page</Typography>
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
