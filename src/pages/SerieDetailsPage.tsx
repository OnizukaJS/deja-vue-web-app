import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetchSerieDetails from "../hooks/useFetchSerieDetails";

const SerieDetailsPage = () => {
  const { serieId } = useParams();
  const { serie, isLoading } = useFetchSerieDetails(serieId!);

  return (
    <Box sx={{ padding: 3 }}>
      {isLoading ? (
        <Box>
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box>
          <Typography>{serie?.name}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SerieDetailsPage;
