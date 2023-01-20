import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import MenuSearchPage from "../components/MenuSearchPage";
import useFetchMoviesSearch from "../hooks/useFetchMoviesSearch";
import { SearchContextData } from "../context/SearchContextProvider";
import MovieSearch from "../components/MovieSearch";

const SearchMoviesPage = () => {
  const useSearchContextData = () => useContext(SearchContextData);
  const query = useSearchContextData();
  const { movies, isLoading } = useFetchMoviesSearch(query);

  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <MenuSearchPage />

      <Box sx={{ width: "100%" }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          movies?.results.map((movie) => <MovieSearch movie={movie} />)
        )}
      </Box>
    </Box>
  );
};

export default SearchMoviesPage;
