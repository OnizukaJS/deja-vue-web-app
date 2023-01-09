import BaseModel from "./BaseModel";
import MovieRecommandationModel from "./MovieRecommandationModel";

interface MovieRecommandationsModel extends BaseModel {
  results: MovieRecommandationModel[];
}

export default MovieRecommandationsModel;
