import React from "react";
import MovieRecommendationModel from "../models/MovieRecommendationModel";
import { createStyles, makeStyles } from "@mui/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import RateBadge from "./RateBadge";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const useStyles = makeStyles(() =>
  createStyles({
    containerRecommendation: {
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

interface RecommendationsProps {
  movie: MovieRecommendationModel;
}

const Recommendations = ({ movie }: RecommendationsProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.containerRecommendation}>
      <CardActionArea
        onClick={() => navigate(routes.movieDetails(movie.id.toString()))}
        sx={{ height: "100%" }}
      >
        <Box sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className={classes.image}
          />
          <CardContent>
            <Typography>{movie.title}</Typography>
            <Typography>{movie.release_date}</Typography>
            <RateBadge rate={Number(movie.vote_average.toFixed(1))} />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Recommendations;
