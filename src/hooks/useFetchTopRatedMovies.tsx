import { useEffect, useState } from "react";
import MoviesModel from "../models/MoviesModel";

const useFetchTopRatedMovies = (): {
  isLoading: boolean;
  topRatedMovies: MoviesModel | undefined;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topRatedMovies, setTopRatedMovies] = useState<
    MoviesModel | undefined
  >();

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
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
      .then((movies) => setTopRatedMovies(movies as MoviesModel))
      .then(() => setIsLoading(false));
  }, []);

  return { isLoading, topRatedMovies };
};

export default useFetchTopRatedMovies;
