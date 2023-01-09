import BaseModel from "./BaseModel";
import MovieModel from "./MovieListModel";

interface MoviesListModel extends BaseModel {
  results: MovieModel[];
}

export default MoviesListModel;
