import { useEffect, useState } from "react";
import MovieRecommendationsListModel from "../models/MovieRecommendationsListModel";

const useFetchMovieRecommendations = (
  movieId: string
): {
  areRecommendationsLoading: boolean;
  recommendations: MovieRecommendationsListModel | undefined;
} => {
  const [areRecommendationsLoading, setAreRecommendationsLoading] =
    useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<
    MovieRecommendationsListModel | undefined
  >();

  useEffect(() => {
    async function fetchMovieRecommendation() {
      try {
        setAreRecommendationsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((recommendations) =>
            setRecommendations(recommendations as MovieRecommendationsListModel)
          )
          .then(() => setAreRecommendationsLoading(false));
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieRecommendation();
  }, [movieId]);

  return { areRecommendationsLoading, recommendations };
};

export default useFetchMovieRecommendations;
