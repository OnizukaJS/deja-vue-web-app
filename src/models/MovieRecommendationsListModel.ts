import BaseModel from "./BaseModel";
import MovieRecommendationModel from "./MovieRecommendationModel";

interface MovieRecommendationsListModel extends BaseModel {
  results: MovieRecommendationModel[];
}

export default MovieRecommendationsListModel;
