import React, { useContext } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { createStyles, makeStyles } from "@mui/styles";
import {
  SearchContextAPI,
  SearchContextData,
} from "../context/SearchContextProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const useStyles = makeStyles(() =>
  createStyles({
    containerForm: {
      width: "50%",
      backgroundColor: "#fff",
      top: 40,
      borderRadius: 4,
    },
    containerInputSearchComponent: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
  })
);

const InputSearchComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const useSearchContextAPI = () => useContext(SearchContextAPI);
  const searchContextAPI = useSearchContextAPI();
  const useSearchContextData = () => useContext(SearchContextData);
  const searchContextData = useSearchContextData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchContextAPI(e.target.value);
  };

  const handleClick = () => {
    navigate(routes.searchMoviesPage(searchContextData));
  };

  return (
    <Box className={classes.containerInputSearchComponent}>
      <FormControl
        variant="outlined"
        className={classes.containerForm}
        sx={{ position: "absolute" }}
      >
        <OutlinedInput
          id="outlined-adornment-search"
          placeholder="Search for a movie, tv show, person...."
          type={"text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};

export default InputSearchComponent;
