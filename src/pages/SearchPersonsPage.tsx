import React from "react";
import { Box, Typography } from "@mui/material";
import MenuSearchPage from "../components/MenuSearchPage";
import useFetchPersonsSearch from "../hooks/useFetchPersonsSearch";
import PersonSearch from "../components/PersonSearch";
import { useParams } from "react-router-dom";

const SearchPersonsPage = () => {
  const { query } = useParams();
  const { persons, isLoading } = useFetchPersonsSearch(query!);

  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <MenuSearchPage />

      <Box sx={{ width: "100%" }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          persons?.results.map((person, key) => (
            <PersonSearch person={person} key={key} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default SearchPersonsPage;
