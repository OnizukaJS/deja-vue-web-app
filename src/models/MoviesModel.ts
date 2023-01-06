import MovieModel from "./MovieModel";

interface MoviesModel {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

export default MoviesModel;
