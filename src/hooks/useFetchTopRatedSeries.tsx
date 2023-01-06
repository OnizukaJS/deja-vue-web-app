import { useEffect, useState } from "react";
import SeriesModel from "../models/SeriesModel";

const useFetchTopRatedSeries = (): {
  isLoading: boolean;
  topRatedSeries: SeriesModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topRatedSeries, setTopRatedSeries] = useState<
    SeriesModel | undefined
  >();

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
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
      .then((series) => setTopRatedSeries(series as SeriesModel))
      .then(() => setIsLoading(false));
  }, []);

  return { isLoading, topRatedSeries };
};

export default useFetchTopRatedSeries;
