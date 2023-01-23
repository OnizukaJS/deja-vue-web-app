import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import SerieRecommendationModel from "../models/SerieRecommendationModel";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import RateBadge from "./RateBadge";
import noRecommendationPicture from "../images/no-recommendation-picture.png";

const useStyles = makeStyles(() =>
  createStyles({
    containerSerieRecommendation: {
      minHeight: 141,
      minWidth: 250,
      margin: "6px",
    },
    image: {
      height: 141,
      width: 250,
    },
  })
);

interface SerieRecommendationsProps {
  serie: SerieRecommendationModel;
}

const SerieRecommendations = ({ serie }: SerieRecommendationsProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const image =
    serie.backdrop_path !== null
      ? `https://www.themoviedb.org/t/p/original${serie.backdrop_path}`
      : noRecommendationPicture;

  return (
    <Card className={classes.containerSerieRecommendation}>
      <CardActionArea
        onClick={() => navigate(routes.serieDetails(serie.id.toString()))}
        sx={{ height: "100%" }}
      >
        <Box sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={image}
            alt={serie.name}
            className={classes.image}
          />
          <CardContent>
            <Typography>{serie.name}</Typography>
            <Typography>{serie.first_air_date}</Typography>
            <RateBadge rate={Number(serie.vote_average.toFixed(1))} />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SerieRecommendations;
