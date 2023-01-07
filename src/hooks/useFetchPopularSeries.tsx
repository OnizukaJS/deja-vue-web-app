import { useEffect, useState } from "react";
import SeriesModel from "../models/SeriesModel";

const useFetchPopularSeries = (): {
  isPopularSeriesLoading: boolean;
  popularSeries: SeriesModel | undefined;
} => {
  const [isPopularSeriesLoading, setIsPopularSeriesLoading] =
    useState<boolean>(false);
  const [popularSeries, setPopularSeries] = useState<SeriesModel | undefined>();

  useEffect(() => {
    setIsPopularSeriesLoading(true);

    fetch(
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
      .then((series) => setPopularSeries(series as SeriesModel))
      .then(() => setIsPopularSeriesLoading(false));
  }, []);

  return { isPopularSeriesLoading, popularSeries };
};

export default useFetchPopularSeries;
