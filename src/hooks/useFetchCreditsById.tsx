import React from "react";
import { useEffect, useState } from "react";
import CreditsModel from "../models/CreditsModel";

const useFetchCreditsById = (
  type: "movie" | "tv",
  id: string
): {
  areCreditsLoading: boolean;
  credits: CreditsModel | undefined;
} => {
  const [areCreditsLoading, setAreCreditsLoading] = useState<boolean>(false);
  const [credits, setCredits] = useState<CreditsModel | undefined>();

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        setAreCreditsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${
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
          .then((credits) => setCredits(credits as CreditsModel))
          .then(() => setAreCreditsLoading(false));
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCredits();
  }, [id]);

  return { areCreditsLoading, credits };
};

export default useFetchCreditsById;
