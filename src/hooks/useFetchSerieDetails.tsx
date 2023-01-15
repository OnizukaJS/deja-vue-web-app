import { useEffect, useState } from "react";
import SerieDetailsModel from "../models/SerieDetailsModel";

const useFetchSerieDetails = (
  serieId: string
): {
  isLoading: boolean;
  serie: SerieDetailsModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serie, setSerie] = useState<SerieDetailsModel | undefined>();

  useEffect(() => {
    async function fetchSerieDetails() {
      try {
        setIsLoading(true);
        await fetch(
          `https://api.themoviedb.org/3/tv/${serieId}?api_key=${
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
          .then((serie) => setSerie(serie as SerieDetailsModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchSerieDetails();
  }, [serieId]);

  return { isLoading, serie };
};

export default useFetchSerieDetails;
