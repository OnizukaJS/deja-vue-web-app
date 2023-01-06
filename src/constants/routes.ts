const routes = {
  homePage: "/",
  movieDetails: (movieId: string): string => `/movie/${movieId}`,
  serieDetails: (serieId: string): string => `/serie/${serieId}`,
  popularMovies: "/popular-movies",
  popularSeries: "/popular-series",
  topRatedMovies: "/top-rated-movies",
  topRatedSeries: "/top-rated-series",
};

export default routes;
