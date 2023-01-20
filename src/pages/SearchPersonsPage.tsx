import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import MenuSearchPage from "../components/MenuSearchPage";
import useFetchPersonsSearch from "../hooks/useFetchPersonsSearch";
import { SearchContextData } from "../context/SearchContextProvider";
import PersonSearch from "../components/PersonSearch";

const SearchPersonsPage = () => {
  const useSearchContextData = () => useContext(SearchContextData);
  const query = useSearchContextData();
  const { persons, isLoading } = useFetchPersonsSearch(query);

  console.log(persons);

  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <MenuSearchPage />

      <Box sx={{ width: "100%" }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          persons?.results.map((person) => <PersonSearch person={person} />)
        )}
      </Box>
    </Box>
  );
};

export default SearchPersonsPage;
