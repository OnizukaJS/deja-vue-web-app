import React, { useState, useEffect } from "react";
import UpcomingMoviesListModel from "../models/UpcomingMoviesListModel";

const useFetchUpcomingMovies = (): {
  isUpcomingMoviesLoading: boolean;
  upcomingMovies: UpcomingMoviesListModel | undefined;
} => {
  const [isUpcomingMoviesLoading, setIsUpcomingMoviesLoading] =
    useState<boolean>(false);
  const [upcomingMovies, setUpcomingMovies] = useState<
    UpcomingMoviesListModel | undefined
  >();

  useEffect(() => {
    async function fetchUpcomingMovies() {
      try {
        setIsUpcomingMoviesLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((movies) =>
            setUpcomingMovies(movies as UpcomingMoviesListModel)
          )
          .then(() => setIsUpcomingMoviesLoading(false));
      } catch (error) {
        setIsUpcomingMoviesLoading(false);
      }
    }

    fetchUpcomingMovies();
  }, []);
  return { isUpcomingMoviesLoading, upcomingMovies };
};

export default useFetchUpcomingMovies;
