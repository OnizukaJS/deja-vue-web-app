import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchSerieDetails from "../hooks/useFetchSerieDetails";
import { createStyles, makeStyles } from "@mui/styles";
import RateBadge from "../components/RateBadge";
import Recommendations from "../components/MovieRecommendations";
import useFetchSerieRecommendations from "../hooks/useFetchSerieRecommendations";
import useFetchCreditsById from "../hooks/useFetchCreditsById";
// import useFetchSerieReviews from "../hooks/useFetchSerieReviews";
import CastCard from "../components/CastCard";
import ReviewCard from "../components/ReviewCard";
import useFetchReviews from "../hooks/useFetchReviews";
import SerieRecommendations from "../components/SerieRecommendations";

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
    containerSerieDetails: {},
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

const SerieDetailsPage = () => {
  const classes = useStyles();
  const { serieId } = useParams();
  const { serie, isLoading } = useFetchSerieDetails(serieId!);
  const { recommendations, areRecommendationsLoading } =
    useFetchSerieRecommendations(serieId!);
  const { credits, areCreditsLoading } = useFetchCreditsById("tv", serieId!);
  const { reviews, areReviewsLoading } = useFetchReviews("tv", serieId!);

  return (
    <Box className={classes.containerSerieDetails}>
      {isLoading ? (
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box>
          <Box className={classes.containerMainInfo}>
            <Box
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/original${serie?.backdrop_path}")`,
              }}
              className={classes.backgroundImage}
            />

            <Box className={classes.containerInformation}>
              <img
                src={`https://www.themoviedb.org/t/p/original${serie?.poster_path}`}
                className={classes.image}
              />

              <Box className={classes.information}>
                <Typography variant="h4">{serie?.name}</Typography>

                <Typography>
                  {serie?.first_air_date} |{" "}
                  {serie?.genres.map((genre) => `${genre.name}, `)} |{" "}
                  {toHoursAndMinutes(serie?.episode_run_time[0])}
                </Typography>

                <RateBadge rate={Number(serie?.vote_average?.toFixed(1))} />

                <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                  {serie?.tagline}
                </Typography>

                <Typography variant="h6">Overview</Typography>
                <Typography>{serie?.overview}</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.containerPadding}>
            <Typography variant="h4">Top Billed Cast</Typography>
            <Box className={classes.subContainer}>
              {areCreditsLoading ? (
                <Typography variant="h4">Reviews</Typography>
              ) : (
                credits?.cast.map((actor) => <CastCard cast={actor} />)
              )}
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
                <Typography>There is no review for this serie yet.</Typography>
              )}
            </Box>
          </Box>

          <Box className={classes.containerPadding}>
            <Typography variant="h4">Recommendations</Typography>
            <Box className={classes.subContainer}>
              {areRecommendationsLoading ? (
                <Typography variant="h4">Loading...</Typography>
              ) : recommendations?.results.length !== 0 ? (
                recommendations?.results.map((reco) => (
                  <SerieRecommendations serie={reco} />
                ))
              ) : (
                <Typography>
                  There is no recommendations for this serie yet.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SerieDetailsPage;
