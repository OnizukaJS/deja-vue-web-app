import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import MenuSearchPage from "../components/MenuSearchPage";
import useFetchSeriesSearch from "../hooks/useFetchSeriesSearch";
import { SearchContextData } from "../context/SearchContextProvider";
import SerieSearch from "../components/SerieSearch";

const SearchSeriesPage = () => {
  const useSearchContextData = () => useContext(SearchContextData);
  const query = useSearchContextData();
  const { series, isLoading } = useFetchSeriesSearch(query);

  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <MenuSearchPage />

      <Box sx={{ width: "100%" }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          series?.results.map((serie) => <SerieSearch serie={serie} />)
        )}
      </Box>
    </Box>
  );
};

export default SearchSeriesPage;
