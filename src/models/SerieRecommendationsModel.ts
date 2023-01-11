import BaseModel from "./BaseModel";
import SerieRecommendationModel from "./SerieRecommendationModel";

interface SerieRecommendationsModel extends BaseModel {
  results: SerieRecommendationModel[];
}

export default SerieRecommendationsModel;
