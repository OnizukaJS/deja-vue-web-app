import BaseModel from "./BaseModel";
import SerieModel from "./SerieListModel";

interface SeriesListModel extends BaseModel {
  results: SerieModel[];
}

export default SeriesListModel;
