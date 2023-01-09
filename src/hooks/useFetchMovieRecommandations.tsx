import { useEffect, useState } from "react";
import MovieRecommandationsModel from "../models/MovieRecommandationsModel";

const useFetchMovieRecommandations = (
  movieId: string
): {
  areRecommandationsLoading: boolean;
  recommandations: MovieRecommandationsModel | undefined;
} => {
  const [areRecommandationsLoading, setAreRecommandationsLoading] =
    useState<boolean>(false);
  const [recommandations, setRecommandations] = useState<
    MovieRecommandationsModel | undefined
  >();

  useEffect(() => {
    async function fetchMovieRecommandation() {
      try {
        setAreRecommandationsLoading(true);

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
          )
          .then(() => setAreRecommandationsLoading(false));
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieRecommandation();
  }, [movieId]);

  return { areRecommandationsLoading, recommandations };
};

export default useFetchMovieRecommandations;
