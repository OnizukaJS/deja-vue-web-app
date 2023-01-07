import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import MovieCard from "../components/MovieCard";

const PopularMoviesPage = () => {
  const { popularMovies, isLoading } = useFetchPopularMovies();
  return (
    <Box sx={{ padding: 3 }}>
      {isLoading ? (
        <Typography variant="h3">Loading...</Typography>
      ) : (
        <Box>
          <Typography variant="h3">Popular movies</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {popularMovies?.results.map((movie, key) => (
              <MovieCard movie={movie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PopularMoviesPage;
