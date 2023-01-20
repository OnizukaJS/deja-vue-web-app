import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import MovieListModel from "../models/MovieListModel";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    containerCard: {
      margin: "1em 24px 1em 0",
    },
    image: {
      borderRadius: 4,
      minHeight: 150,
    },
  })
);

const MovieSearch = ({ movie }: { movie: MovieListModel }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const truncate = (overview: string, maxLength: number) => {
    return overview.length > maxLength
      ? overview.slice(0, maxLength - 1) + "..."
      : overview;
  };

  return (
    <Card className={classes.containerCard}>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box
          onClick={() => navigate(routes.movieDetails(movie.id.toString()))}
          sx={{ display: "flex", justifyContent: "start", cursor: "pointer" }}
        >
          <CardMedia
            component="img"
            image={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className={classes.image}
            sx={{ width: 100 }}
          />
        </Box>
        <CardContent>
          <Typography>
            <Link
              to={routes.movieDetails(movie.id.toString())}
              style={{ fontWeight: "bold", color: "black" }}
            >
              {movie.title}
            </Link>
          </Typography>
          <Typography variant="caption">{movie.release_date}</Typography>
          <Typography>{truncate(movie.overview, 200)}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieSearch;
