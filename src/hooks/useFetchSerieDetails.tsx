import { useEffect, useState } from "react";
import SerieModel from "../models/SerieModel";

const useFetchSerieDetails = (
  serieId: string
): {
  isLoading: boolean;
  serie: SerieModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serie, setSerie] = useState<SerieModel | undefined>();

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
              Authorization: `${import.meta.env.TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((serie) => setSerie(serie as SerieModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchSerieDetails();
  }, []);

  return { isLoading, serie };
};

export default useFetchSerieDetails;
