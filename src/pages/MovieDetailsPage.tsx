import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";
import { createStyles, makeStyles } from "@mui/styles";
import RateBadge from "../components/RateBadge";
import Recommandations from "../components/Recommandations";
import useFetchMovieRecommandations from "../hooks/useFetchMovieRecommandations";
import useFetchMovieCredits from "../hooks/useFetchMovieCredits";
import useFetchMovieReviews from "../hooks/useFetchMovieReviews";
import CastCard from "../components/CastCard";
import ReviewCard from "../components/ReviewCard";

const useStyles = makeStyles(() =>
  createStyles({
    backgroundImage: {
      backgroundSize: "cover",
      height: "40em",
      filter: "brightness(0.3)",
    },
    containerMainInfo: {},
    containerInformation: {
      display: "flex",
      position: "absolute",
      top: "185px",
      left: "50px",
    },
    containerMovieDetails: {},
    containerPadding: {
      padding: 24,
    },
    image: {
      height: 500,
      borderRadius: "8px",
    },
    information: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "#fff",
      marginLeft: 24,
    },
    subContainer: {
      display: "flex",
      overflowX: "auto",
      overflowY: "hidden",
    },
  })
);

const toHoursAndMinutes = (totalMinutes: number | undefined) => {
  if (totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes & 60;

    return `${hours}h${minutes}`;
  }
};

const MovieDetailsPage = () => {
  const classes = useStyles();
  const { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetails(movieId!);
  const { recommandations, areRecommandationsLoading } =
    useFetchMovieRecommandations(movieId!);
  const { credits, areCreditsLoading } = useFetchMovieCredits(movieId!);
  const { reviews, areReviewsLoading } = useFetchMovieReviews(movieId!);

  console.log(credits);
  console.log(reviews);

  return (
    <Box className={classes.containerMovieDetails}>
      {isLoading ? (
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box>
          <Box className={classes.containerMainInfo}>
            <Box
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie?.backdrop_path}")`,
              }}
              className={classes.backgroundImage}
            />

            <Box className={classes.containerInformation}>
              <img
                src={`https://www.themoviedb.org/t/p/original${movie?.poster_path}`}
                className={classes.image}
              />

              <Box className={classes.information}>
                <Typography variant="h4">{movie?.title}</Typography>

                <Typography>
                  {movie?.release_date} |{" "}
                  {movie?.genres.map((genre) => `${genre.name}, `)} |{" "}
                  {toHoursAndMinutes(movie?.runtime)}
                </Typography>

                <RateBadge rate={Number(movie?.vote_average?.toFixed(1))} />

                <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                  {movie?.tagline}
                </Typography>

                <Typography variant="h6">Overview</Typography>
                <Typography>{movie?.overview}</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.containerPadding}>
            <Typography variant="h4">Top Billed Cast</Typography>
            <Box className={classes.subContainer}>
              {credits?.cast.map((actor) => (
                <CastCard cast={actor} />
              ))}
            </Box>
          </Box>

          <Box className={classes.containerPadding}>
            <Typography variant="h4">Reviews</Typography>
            <Box className={classes.subContainer}>
              <ReviewCard review={reviews?.results[0]!} />
              {/* {reviews?.reviews.map((review) => (
                <ReviewCard review={review} />
              ))} */}
            </Box>
          </Box>

          <Box className={classes.containerPadding}>
            <Typography variant="h4">Recommandations</Typography>
            <Box className={classes.subContainer}>
              {recommandations?.results.map((reco) => (
                <Recommandations movie={reco} />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetailsPage;
