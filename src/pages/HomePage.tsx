import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    containerWelcomeSection: {},
  })
);

const HomePage = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.containerWelcomeSection}>
        <p>Home Page</p>
      </Box>
      <Box>
        <p>What's popular</p>
      </Box>
      <Box>
        <p>What's top rated</p>
      </Box>
    </Box>
  );
};

export default HomePage;
