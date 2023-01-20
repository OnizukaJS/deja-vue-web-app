const routes = {
  castDetails: (castId: string): string => `/cast/${castId}`,
  homePage: "/",
  movieDetails: (movieId: string): string => `/movie/${movieId}`,
  searchMoviesPage: (query: string): string => `/search/movie/query/${query}`,
  searchSeriesPage: (query: string): string => `/search/serie/query/${query}`,
  searchPersonsPage: (query: string): string => `/search/person/query/${query}`,
  serieDetails: (serieId: string): string => `/serie/${serieId}`,
  popularMovies: "/popular-movies",
  popularSeries: "/popular-series",
  topRatedMovies: "/top-rated-movies",
  topRatedSeries: "/top-rated-series",
};

export default routes;
