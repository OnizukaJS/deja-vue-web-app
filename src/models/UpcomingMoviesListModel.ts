import BaseModel from "./BaseModel";
import UpcomingMovieModel from "./UpcomingMovieModel";

interface UpcomingMoviesListModel extends BaseModel {
  dates: {
    maximum: Date;
    minimum: Date;
  };
  results: UpcomingMovieModel[];
}

export default UpcomingMoviesListModel;
