import BaseModel from "./BaseModel";
import SerieRecommendationModel from "./SerieRecommendationModel";

interface SerieRecommendationsListModel extends BaseModel {
  results: SerieRecommendationModel[];
}

export default SerieRecommendationsListModel;
