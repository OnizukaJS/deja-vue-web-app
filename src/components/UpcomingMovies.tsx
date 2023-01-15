import { Box, Typography } from "@mui/material";
import React from "react";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";
import MovieCard from "./MovieCard";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    containerUpcomingMovies: {
      display: "flex",
      overflowX: "auto",
    },
  })
);

const UpcomingMovies = () => {
  const classes = useStyles();
  const { upcomingMovies, isUpcomingMoviesLoading } = useFetchUpcomingMovies();
  return (
    <Box className={classes.containerUpcomingMovies}>
      {isUpcomingMoviesLoading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        upcomingMovies?.results.map((movie, key) => (
          <MovieCard movie={movie} key={key} />
        ))
      )}
    </Box>
  );
};

export default UpcomingMovies;
