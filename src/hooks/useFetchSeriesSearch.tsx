import React, { useState, useEffect } from "react";
import SeriesListModel from "../models/SeriesListModel";

const useFetchSeriesSearch = (
  query: string
): {
  isLoading: boolean;
  series: SeriesListModel;
} => {
  const [series, setSeries] = useState<SeriesListModel>({} as SeriesListModel);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchSeriesSearch() {
      try {
        setIsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1&include_adult=false&query=${query}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((series) => setSeries(series as SeriesListModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchSeriesSearch();
  }, []);

  return { isLoading, series };
};

export default useFetchSeriesSearch;
