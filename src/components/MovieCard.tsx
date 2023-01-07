import { Box, Card } from "@mui/material";
import {
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MovieModel from "../models/MovieModel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { createStyles, makeStyles } from "@mui/styles";
import RateBadge from "./RateBadge";

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
      minHeight: 200,
    },
  })
);

interface MovieCardProps {
  movie: MovieModel;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

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
              image={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className={classes.image}
            />
          </Box>
          <CardActions disableSpacing sx={{ justifyContent: "end" }}>
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
