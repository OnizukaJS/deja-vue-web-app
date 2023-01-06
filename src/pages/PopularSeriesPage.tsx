import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchPopularSeries from "../hooks/useFetchPopularSeries";
import SerieCard from "../components/SerieCard";

const PopularSeriesPage = () => {
  const { popularSeries, isLoading } = useFetchPopularSeries();

  return (
    <>
      {isLoading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Box>
          <h1>Popular series</h1>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {popularSeries?.results.map((serie, key) => (
              <SerieCard serie={serie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default PopularSeriesPage;