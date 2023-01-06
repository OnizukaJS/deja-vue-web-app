import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import MovieCard from "../components/MovieCard";

const PopularMoviesPage = () => {
  const { popularMovies, isLoading } = useFetchPopularMovies();
  return (
    <>
      {isLoading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Box>
          <h1>Popular movies</h1>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {popularMovies?.results.map((movie, key) => (
              <MovieCard movie={movie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default PopularMoviesPage;
