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
import { useNavigate, useParams } from "react-router-dom";
import routes from "../constants/routes";
import useFetchMoviesSearch from "../hooks/useFetchMoviesSearch";
import useFetchSeriesSearch from "../hooks/useFetchSeriesSearch";
import useFetchPersonsSearch from "../hooks/useFetchPersonsSearch";

const useStyles = makeStyles(() =>
  createStyles({
    containerMenu: {
      marginRight: 24,
      minWidth: 250,
    },
    containerMenuList: {
      border: "1px solid gainsboro",
      borderRadius: 4,
    },
    resultsNumber: {
      backgroundColor: "rgba(0,0,0,0.08)",
      padding: "2px 12px",
      borderRadius: 4,
    },
    title: {
      backgroundColor: "#01b4e4",
      color: "#fff",
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  })
);

const MenuSearchPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { query } = useParams();
  const { movies } = useFetchMoviesSearch(query!);
  const { series } = useFetchSeriesSearch(query!);
  const { persons } = useFetchPersonsSearch(query!);

  const handleNavigate = (search: "movies" | "series" | "persons") => {
    if (search === "movies") {
      navigate(routes.searchMoviesPage(query!));
    } else if (search === "series") {
      navigate(routes.searchSeriesPage(query!));
    } else {
      navigate(routes.searchPersonsPage(query!));
    }
  };

  return (
    <Box className={classes.containerMenu}>
      <MenuList
        className={classes.containerMenuList}
        sx={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <ListItem className={classes.title}>
          <Typography sx={{ fontWeight: "bold" }}>Search results</Typography>
        </ListItem>
        <MenuItem
          onClick={() => handleNavigate("movies")}
          selected={window.location.href.includes("movie")}
        >
          <ListItemText>Movies</ListItemText>
          <Typography variant="body2" className={classes.resultsNumber}>
            {movies?.total_results}
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("series")}
          selected={window.location.href.includes("serie")}
        >
          <ListItemText>Series</ListItemText>
          <Typography variant="body2" className={classes.resultsNumber}>
            {series?.total_results}
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("persons")}
          selected={window.location.href.includes("person")}
        >
          <ListItemText>Persons</ListItemText>
          <Typography variant="body2" className={classes.resultsNumber}>
            {persons?.total_results}
          </Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default MenuSearchPage;
