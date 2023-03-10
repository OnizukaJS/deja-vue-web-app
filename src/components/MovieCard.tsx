import { Box, Card } from "@mui/material";
import {
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MovieListModel from "../models/MovieListModel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { createStyles, makeStyles } from "@mui/styles";
import RateBadge from "./RateBadge";
import noMovieCardPicture from "../images/no-picture-available.png";

const useStyles = makeStyles(() =>
  createStyles({
    containerCard: {
      width: 150,
      minWidth: 150,
      margin: "1em 24px 1em 0",

      "&:hover": {
        transform: "scale(1.03)",
      },
    },
    image: {
      borderRadius: 4,
      minHeight: 225,
    },
  })
);

interface MovieCardProps {
  movie: MovieListModel;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const image =
    movie.poster_path !== null
      ? `https://www.themoviedb.org/t/p/original${movie.poster_path}`
      : noMovieCardPicture;

  return (
    <Card className={classes.containerCard}>
      <CardActionArea
        onClick={() => navigate(routes.movieDetails(movie.id.toString()))}
        sx={{ height: "100%" }}
      >
        <Box sx={{ height: "100%" }}>
          <Box sx={{ minHeight: 200 }}>
            <CardMedia
              component="img"
              image={image}
              alt={movie.title}
              className={classes.image}
            />
          </Box>
          <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
            <RateBadge rate={movie.vote_average} />
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="watched">
              <VisibilityIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <span>
              <b>{movie.title}</b>
            </span>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
