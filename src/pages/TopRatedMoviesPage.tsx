import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import MovieCard from "../components/MovieCard";

const TopRatedMoviesPage = () => {
  const { topRatedMovies, isTopRatedMoviesLoading } = useFetchTopRatedMovies();

  return (
    <Box sx={{ padding: 3 }}>
      {isTopRatedMoviesLoading ? (
        <Typography variant="h3">Loading...</Typography>
      ) : (
        <Box>
          <Typography variant="h3">Top rated movies</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {topRatedMovies?.results.map((movie, key) => (
              <MovieCard movie={movie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TopRatedMoviesPage;
