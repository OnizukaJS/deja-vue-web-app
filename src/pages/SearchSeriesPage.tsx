import React from "react";
import { Box, Typography } from "@mui/material";
import MenuSearchPage from "../components/MenuSearchPage";
import useFetchSeriesSearch from "../hooks/useFetchSeriesSearch";
import SerieSearch from "../components/SerieSearch";
import { useParams } from "react-router-dom";

const SearchSeriesPage = () => {
  const { query } = useParams();
  const { series, isLoading } = useFetchSeriesSearch(query!);

  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <MenuSearchPage />

      <Box sx={{ width: "100%" }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          series?.results.map((serie, key) => (
            <SerieSearch serie={serie} key={key} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default SearchSeriesPage;
