import BaseModel from "./BaseModel";
import SerieModel from "./SerieModel";

interface SeriesListModel extends BaseModel {
  results: SerieModel[];
}

export default SeriesListModel;
