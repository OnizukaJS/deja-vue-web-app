import { useEffect, useState } from "react";
import SeriesListModel from "../models/SeriesListModel";

const useFetchPopularSeries = (): {
  isPopularSeriesLoading: boolean;
  popularSeries: SeriesListModel | undefined;
} => {
  const [isPopularSeriesLoading, setIsPopularSeriesLoading] =
    useState<boolean>(false);
  const [popularSeries, setPopularSeries] = useState<
    SeriesListModel | undefined
  >();

  useEffect(() => {
    async function fetchPopularSeries() {
      try {
        setIsPopularSeriesLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${
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
          .then((series) => setPopularSeries(series as SeriesListModel))
          .then(() => setIsPopularSeriesLoading(false));
      } catch (error) {
        setIsPopularSeriesLoading(false);
      }
    }

    fetchPopularSeries();
  }, []);

  return { isPopularSeriesLoading, popularSeries };
};

export default useFetchPopularSeries;
