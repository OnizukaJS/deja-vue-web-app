import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetchSerieDetails from "../hooks/useFetchSerieDetails";

const SerieDetailsPage = () => {
  const { serieId } = useParams();
  const { serie, isLoading } = useFetchSerieDetails(serieId!);

  return (
    <>
      {isLoading ? (
        <Box>
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box>
          <Typography>{serie?.name}</Typography>
        </Box>
      )}
    </>
  );
};

export default SerieDetailsPage;
