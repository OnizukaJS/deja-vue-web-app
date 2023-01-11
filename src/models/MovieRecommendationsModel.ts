import BaseModel from "./BaseModel";
import MovieRecommendationModel from "./MovieRecommendationModel";

interface MovieRecommendationsModel extends BaseModel {
  results: MovieRecommendationModel[];
}

export default MovieRecommendationsModel;
