import { useEffect, useState } from "react";
import SerieRecommendationsModel from "../models/SerieRecommendationsModel";

const useFetchSerieRecommendations = (
  serieId: string
): {
  areRecommendationsLoading: boolean;
  recommendations: SerieRecommendationsModel | undefined;
} => {
  const [areRecommendationsLoading, setAreRecommendationsLoading] =
    useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<
    SerieRecommendationsModel | undefined
  >();

  useEffect(() => {
    async function fetchSerieRecommendation() {
      try {
        setAreRecommendationsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/tv/${serieId}/recommendations?api_key=${
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
            setRecommendations(recommendations as SerieRecommendationsModel)
          )
          .then(() => setAreRecommendationsLoading(false));
      } catch (error) {
        console.log(error);
      }
    }

    fetchSerieRecommendation();
  }, [serieId]);

  return { areRecommendationsLoading, recommendations };
};

export default useFetchSerieRecommendations;
