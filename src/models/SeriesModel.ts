import SerieModel from "./SerieModel";

interface SeriesModel {
  page: number;
  results: SerieModel[];
  total_pages: number;
  total_results: number;
}

export default SeriesModel;
