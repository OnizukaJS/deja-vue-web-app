import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";
import { createStyles, makeStyles } from "@mui/styles";
import RateBadge from "../components/RateBadge";
import Recommendations from "../components/Recommendations";
import useFetchMovieRecommendations from "../hooks/useFetchMovieRecommendations";
import useFetchCreditsById from "../hooks/useFetchCreditsById";
import useFetchMovieReviews from "../hooks/useFetchMovieReviews";
import CastCard from "../components/CastCard";
import ReviewCard from "../components/ReviewCard";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarRateIcon from "@mui/icons-material/StarRate";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useFetchVideosByMovieOrSerieId from "../hooks/useFetchVideosByMovieOrSerieId";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles(() =>
  createStyles({
    backgroundImage: {
      backgroundSize: "cover",
      height: "40em",
      filter: "brightness(0.3)",
    },
    button: {
      background: "#0d253f!important",
      color: "#fff!important",
      marginLeft: 2,
      marginRight: 2,
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
    iframe: {
      width: "100%",
      height: "100%",
      borderWidth: 0,
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
    modal: {
      top: "45%!important",
      left: "50%!important",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "88%",
      border: "2px solid #000",
      boxShadow: "24px",
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
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetails(movieId!);
  const { recommendations, areRecommendationsLoading } =
    useFetchMovieRecommendations(movieId!);
  const { credits, areCreditsLoading } = useFetchCreditsById("movie", movieId!);
  const { reviews, areReviewsLoading } = useFetchMovieReviews(movieId!);
  const { videos } = useFetchVideosByMovieOrSerieId("movie", movieId!);
  const trailer = videos?.results?.filter((video) => video.type === "Trailer");
  const trailerId = trailer ? trailer[0].key : "";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

                <Box sx={{ display: "flex" }}>
                  <RateBadge rate={Number(movie?.vote_average?.toFixed(1))} />

                  <Box sx={{ marginLeft: 1 }}>
                    <IconButton
                      aria-label="add-to-list"
                      className={classes.button}
                      sx={{ marginLeft: 1, marginRight: 1 }}
                    >
                      <FormatListBulletedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="add-to-favorites"
                      className={classes.button}
                      sx={{ marginLeft: 1, marginRight: 1 }}
                    >
                      <FavoriteIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="add-to-watchlist"
                      className={classes.button}
                      sx={{ marginLeft: 1, marginRight: 1 }}
                    >
                      <BookmarkIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="rate-it"
                      className={classes.button}
                      sx={{ marginLeft: 1, marginRight: 1 }}
                    >
                      <StarRateIcon fontSize="small" />
                    </IconButton>

                    <Button
                      variant="text"
                      startIcon={<PlayArrowIcon />}
                      sx={{ color: "#fff", fontWeight: "bold" }}
                      onClick={handleOpen}
                    >
                      Play Trailer
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      className={classes.modal}
                    >
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "black",
                            color: "#fff",
                            padding: 2,
                          }}
                        >
                          <Typography>Trailer {movie?.title}</Typography>
                          <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon sx={{ color: "grey" }} />
                          </IconButton>
                        </Box>
                        <iframe
                          src={`https://www.youtube.com/embed/${trailerId}`}
                          title={`${movie?.title}`}
                          allowFullScreen
                          className={classes.iframe}
                        ></iframe>
                      </>
                    </Modal>
                  </Box>
                </Box>

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
              {areReviewsLoading ? (
                <Typography variant="h4">Loading...</Typography>
              ) : reviews?.results?.length !== 0 ? (
                <ReviewCard review={reviews?.results[0]!} />
              ) : (
                <Typography>There is no review for this movie yet.</Typography>
              )}
            </Box>
          </Box>

          <Box className={classes.containerPadding}>
            <Typography variant="h4">Recommendations</Typography>
            <Box className={classes.subContainer}>
              {areRecommendationsLoading ? (
                <Typography variant="h4">Loading...</Typography>
              ) : (
                recommendations?.results.map((reco) => (
                  <Recommendations movie={reco} />
                ))
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetailsPage;
