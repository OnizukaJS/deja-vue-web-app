import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchPopularSeries from "../hooks/useFetchPopularSeries";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchTopRatedSeries from "../hooks/useFetchTopRatedSeries";
import WhatIsPopular from "../components/WhatIsPopular";
import WhatIsTopRated from "../components/WhatIsTopRated";

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
  const { topRatedMovies, isTopRatedMoviesLoading } = useFetchTopRatedMovies();
  const { topRatedSeries, isTopRatedSeriesLoading } = useFetchTopRatedSeries();

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
    </Box>
  );
};

export default HomePage;
