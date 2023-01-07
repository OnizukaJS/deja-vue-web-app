import React from "react";
import { Box, Typography } from "@mui/material";
import useFetchPopularSeries from "../hooks/useFetchPopularSeries";
import SerieCard from "../components/SerieCard";

const PopularSeriesPage = () => {
  const { popularSeries, isLoading } = useFetchPopularSeries();

  return (
    <Box sx={{ padding: 3 }}>
      {isLoading ? (
        <Typography variant="h3">Loading...</Typography>
      ) : (
        <Box>
          <Typography variant="h3">Popular series</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {popularSeries?.results.map((serie, key) => (
              <SerieCard serie={serie} key={key} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PopularSeriesPage;
