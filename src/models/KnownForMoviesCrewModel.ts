import KnownForMoviesCastModel from "./KnownForMoviesCastModel";

interface KnownForMoviesCrewModel extends KnownForMoviesCastModel {
  department: string;
  job: string;
}

export default KnownForMoviesCrewModel;
