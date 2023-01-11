import React, { useState, useEffect } from "react";
import KnownForMoviesModelList from "../models/KnownForMoviesModelList";

const useFetchKnownForMoviesByCastId = (
  castId: string
): {
  isKnownForLoading: boolean;
  knownFor: KnownForMoviesModelList | undefined;
} => {
  const [isKnownForLoading, setIsKnownForLoading] = useState<boolean>(false);
  const [knownFor, setKnownFor] = useState<
    KnownForMoviesModelList | undefined
  >();

  useEffect(() => {
    async function fetchKnownForMoviesByCastId() {
      try {
        setIsKnownForLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((movies) => setKnownFor(movies as KnownForMoviesModelList))
          .then(() => setIsKnownForLoading(false));
      } catch (error) {
        setIsKnownForLoading(false);
      }
    }

    fetchKnownForMoviesByCastId();
  }, [castId]);
  return { isKnownForLoading, knownFor };
};

export default useFetchKnownForMoviesByCastId;
