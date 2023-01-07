import React, { ReactNode, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchPopularSeries from "../hooks/useFetchPopularSeries";
import Typography from "@mui/material/Typography";
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

const WhatIsPopular = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { popularMovies, isPopularMoviesLoading } = useFetchPopularMovies();
  const { popularSeries, isPopularSeriesLoading } = useFetchPopularSeries();

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
            label="Popular movies"
            {...a11yProps(0)}
            className={classes.tab}
          />
          <Tab
            label="Popular series"
            {...a11yProps(1)}
            className={classes.tab}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {popularMovies?.results.map((movie, key) => (
          <MovieCard movie={movie} key={key} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {popularSeries?.results.map((serie, key) => (
          <SerieCard serie={serie} key={key} />
        ))}
      </TabPanel>
    </Box>
  );
};

export default WhatIsPopular;
