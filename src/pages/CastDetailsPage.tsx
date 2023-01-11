import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import useFetchCastById from "../hooks/useFetchCastById";
import { createStyles, makeStyles } from "@mui/styles";
import useFetchKnownForMoviesByCastId from "../hooks/useFetchKnownForMoviesByCastId";
import MovieCard from "../components/MovieCard";

const useStyles = makeStyles(() =>
  createStyles({
    containerCastDetailsPage: {
      padding: 24,
      display: "flex",
    },
    image: {
      height: 500,
      borderRadius: "8px",
    },
  })
);

const CastDetailsPage = () => {
  const classes = useStyles();
  const { castId } = useParams();
  const { isLoading, cast } = useFetchCastById(castId!);
  const { isKnownForLoading, knownFor } = useFetchKnownForMoviesByCastId(
    castId!
  );

  return isLoading ? (
    <Typography>Loading...</Typography>
  ) : (
    <Box className={classes.containerCastDetailsPage}>
      <Box sx={{ marginRight: 3 }}>
        <img
          src={`https://www.themoviedb.org/t/p/original${cast?.profile_path}`}
          className={classes.image}
        />
        <Typography variant="h4">Personal Info</Typography>
        <Typography variant="h5">Known For</Typography>
        <Typography>{cast?.known_for_department}</Typography>
        <Typography variant="h5">Known Credits</Typography>
        <Typography>{knownFor?.cast.length}</Typography>
        <Typography variant="h5">Gender</Typography>
        <Typography>{cast?.gender}</Typography>

        <Typography variant="h5">Birthday</Typography>
        <Typography>{cast?.birthday}</Typography>
        <Typography variant="h5">Place of Birth</Typography>
        <Typography>{cast?.place_of_birth}</Typography>
        <Typography variant="h5">Also Known As</Typography>
        {cast?.also_known_as.map((nickName) => (
          <Typography>{nickName}</Typography>
        ))}
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="h4">{cast?.name}</Typography>
        <Typography variant="h5">Biography</Typography>
        <Typography>{cast?.biography}</Typography>
        <Typography variant="h5">Known For</Typography>
        <Box sx={{ display: "flex", overflowX: "scroll" }}>
          {isKnownForLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            knownFor?.cast.map((movie) => <MovieCard movie={movie} />)
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CastDetailsPage;
