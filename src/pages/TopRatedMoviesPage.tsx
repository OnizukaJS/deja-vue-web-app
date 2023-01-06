import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import MovieCard from "../components/MovieCard";

const TopRatedMoviesPage = () => {
  const { topRatedMovies, isLoading } = useFetchTopRatedMovies();

  return (
    <>
      {isLoading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Box>
          <h1>Top rated movies</h1>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {topRatedMovies?.results.map((movie, key) => (
              <MovieCard movie={movie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default TopRatedMoviesPage;
