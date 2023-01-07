import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchTopRatedSeries from "../hooks/useFetchTopRatedSeries";
import SerieCard from "../components/SerieCard";

const TopRatedSeriesPage = () => {
  const { topRatedSeries, isLoading } = useFetchTopRatedSeries();
  return (
    <Box sx={{ padding: 3 }}>
      {isLoading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Box>
          <h1>Top rated series</h1>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {topRatedSeries?.results.map((serie, key) => (
              <SerieCard serie={serie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TopRatedSeriesPage;
