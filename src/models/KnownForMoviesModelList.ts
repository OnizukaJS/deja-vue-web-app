import KnownForMoviesCastModel from "./KnownForMoviesCastModel";
import KnownForMoviesCrewModel from "./KnownForMoviesCrewModel";

interface KnownForMoviesModelList {
  id: number;
  cast: KnownForMoviesCastModel[];
  crew: KnownForMoviesCrewModel[];
}

export default KnownForMoviesModelList;
