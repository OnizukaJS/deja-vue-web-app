import { useEffect, useState } from "react";
import MoviesModel from "../models/MoviesModel";

const useFetchPopularMovies = (): {
  isPopularMoviesLoading: boolean;
  popularMovies: MoviesModel | undefined;
} => {
  const [isPopularMoviesLoading, setIsPopularMoviesLoading] =
    useState<boolean>(false);
  const [popularMovies, setPopularMovies] = useState<MoviesModel | undefined>();

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        setIsPopularMoviesLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
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
          .then((movies) => setPopularMovies(movies as MoviesModel))
          .then(() => setIsPopularMoviesLoading(false));
      } catch (error) {
        setIsPopularMoviesLoading(false);
      }
    }

    fetchPopularMovies();
  }, []);

  return { isPopularMoviesLoading, popularMovies };
};

export default useFetchPopularMovies;
