import React, { useState, useEffect } from "react";
import MoviesListModel from "../models/MoviesListModel";

const useFetchMoviesSearch = (
  query: string
): {
  isLoading: boolean;
  movies: MoviesListModel;
} => {
  const [movies, setMovies] = useState<MoviesListModel>({} as MoviesListModel);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMoviesSearch() {
      try {
        setIsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
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
          .then((movies) => setMovies(movies as MoviesListModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchMoviesSearch();
  }, []);

  return { isLoading, movies };
};

export default useFetchMoviesSearch;
