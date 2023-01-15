import { useEffect, useState } from "react";
import MovieDetailsModel from "../models/MovieDetailsModel";

const useFetchMovieDetails = (
  movieId: string
): {
  isLoading: boolean;
  movie: MovieDetailsModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieDetailsModel | undefined>();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((movie) => setMovie(movie as MovieDetailsModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return { isLoading, movie };
};

export default useFetchMovieDetails;
