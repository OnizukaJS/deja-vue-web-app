import React, { useContext } from "react";
import {
  Box,
  MenuList,
  MenuItem,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { SearchContextData } from "../context/SearchContextProvider";

const useStyles = makeStyles(() =>
  createStyles({
    resultsNumber: {
      backgroundColor: "rgba(0,0,0,0.08)",
      padding: "2px 12px",
      borderRadius: 4,
    },
    title: {
      backgroundColor: "#01b4e4",
      color: "#fff",
    },
  })
);

const MenuSearchPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const useSearchContextData = () => useContext(SearchContextData);
  const query = useSearchContextData();

  const handleNavigate = (search: "movies" | "series" | "persons") => {
    if (search === "movies") {
      navigate(routes.searchMoviesPage(query));
    } else if (search === "series") {
      navigate(routes.searchSeriesPage(query));
    } else {
      navigate(routes.searchPersonsPage(query));
    }
  };

  return (
    <Box>
      <MenuList>
        <ListItem className={classes.title}>
          <Typography sx={{ fontWeight: "bold" }}>Search results</Typography>
        </ListItem>
        <MenuItem onClick={() => handleNavigate("movies")}>
          <ListItemText>Movies</ListItemText>
          <Typography variant="body2" className={classes.resultsNumber}>
            823
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("series")}>
          <ListItemText>Series</ListItemText>
          <Typography variant="body2" className={classes.resultsNumber}>
            2314
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("persons")}>
          <ListItemText>Persons</ListItemText>
          <Typography variant="body2" className={classes.resultsNumber}>
            378
          </Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default MenuSearchPage;
