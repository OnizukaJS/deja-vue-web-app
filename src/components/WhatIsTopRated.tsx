import React, { ReactNode, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchTopRatedSeries from "../hooks/useFetchTopRatedSeries";
import { createStyles, makeStyles } from "@mui/styles";
import MovieCard from "./MovieCard";
import SerieCard from "./SerieCard";

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      "&:focus": {
        outline: 0,
      },
    },
  })
);

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ display: "flex", overflowX: "auto" }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WhatIsTopRated = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { topRatedMovies, isTopRatedMoviesLoading } = useFetchTopRatedMovies();
  const { topRatedSeries, isTopRatedSeriesLoading } = useFetchTopRatedSeries();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Top rated movies"
            {...a11yProps(0)}
            className={classes.tab}
          />
          <Tab
            label="Top rated series"
            {...a11yProps(1)}
            className={classes.tab}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {isTopRatedMoviesLoading ? (
          <Typography variant="h4" sx={{ margin: "12px 0" }}>
            Loading...
          </Typography>
        ) : (
          topRatedMovies?.results.map((movie, key) => (
            <MovieCard movie={movie} key={key} />
          ))
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isTopRatedSeriesLoading ? (
          <Typography variant="h4" sx={{ margin: "12px 0" }}>
            Loading...
          </Typography>
        ) : (
          topRatedSeries?.results.map((serie, key) => (
            <SerieCard serie={serie} key={key} />
          ))
        )}
      </TabPanel>
    </Box>
  );
};

export default WhatIsTopRated;
