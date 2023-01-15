import { useEffect, useState } from "react";
import MoviesListModel from "../models/MoviesListModel";

const useFetchTopRatedMovies = (): {
  isTopRatedMoviesLoading: boolean;
  topRatedMovies: MoviesListModel | undefined;
} => {
  const [isTopRatedMoviesLoading, setIsTopRatedMoviesLoading] =
    useState<boolean>(false);
  const [topRatedMovies, setTopRatedMovies] = useState<
    MoviesListModel | undefined
  >();

  useEffect(() => {
    async function fetchTopRatedMovies() {
      try {
        setIsTopRatedMoviesLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
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
          .then((movies) => setTopRatedMovies(movies as MoviesListModel))
          .then(() => setIsTopRatedMoviesLoading(false));
      } catch (error) {
        setIsTopRatedMoviesLoading(false);
      }
    }

    fetchTopRatedMovies();
  }, []);

  return { isTopRatedMoviesLoading, topRatedMovies };
};

export default useFetchTopRatedMovies;
