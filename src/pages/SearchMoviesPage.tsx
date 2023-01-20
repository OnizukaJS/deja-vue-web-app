import React from "react";
import { Box, Typography } from "@mui/material";
import MenuSearchPage from "../components/MenuSearchPage";
import useFetchMoviesSearch from "../hooks/useFetchMoviesSearch";
import MovieSearch from "../components/MovieSearch";
import { useParams } from "react-router-dom";

const SearchMoviesPage = () => {
  const { query } = useParams();
  console.log("param:", query);
  const { movies, isLoading } = useFetchMoviesSearch(query!);

  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <MenuSearchPage />

      <Box sx={{ width: "100%" }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          movies?.results?.map((movie, key) => (
            <MovieSearch movie={movie} key={key} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default SearchMoviesPage;
