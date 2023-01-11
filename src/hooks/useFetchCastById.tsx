import React, { useState, useEffect } from "react";
import CastDetailsModel from "../models/CastDetailsModel";

const useFetchCastById = (
  castId: string
): {
  isLoading: boolean;
  cast: CastDetailsModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cast, setCast] = useState<CastDetailsModel>();

  useEffect(() => {
    setIsLoading(true);

    async function fetchCastDetails() {
      try {
        await fetch(
          `
                https://api.themoviedb.org/3/person/${castId}?api_key=${
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
          .then((cast) => setCast(cast as CastDetailsModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchCastDetails();
  }, [castId]);

  return { isLoading, cast };
};

export default useFetchCastById;
