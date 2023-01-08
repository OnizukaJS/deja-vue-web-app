import MovieModel from "./MovieListModel";

interface MoviesListModel {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

export default MoviesListModel;
