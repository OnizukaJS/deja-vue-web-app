import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetails(movieId!);

  return (
    <Box sx={{ padding: 3 }}>
      {isLoading ? (
        <Box>
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box>
          <Typography>{movie?.title}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetailsPage;
