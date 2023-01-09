import { useEffect, useState } from "react";
import MovieRecommandationsModel from "../models/MovieRecommandationsModel";

const useFetchMovieRecommandations = (
  movieId: string
): {
  isLoading: boolean;
  recommandations: MovieRecommandationsModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommandations, setRecommandations] = useState<
    MovieRecommandationsModel | undefined
  >();

  useEffect(() => {
    async function fetchMovieRecommandation() {
      try {
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
          .then((recommandations) =>
            setRecommandations(recommandations as MovieRecommandationsModel)
          );
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieRecommandation();
  }, []);

  return { isLoading, recommandations };
};

export default useFetchMovieRecommandations;
