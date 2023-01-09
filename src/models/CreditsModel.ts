import CastModel from "./CastModel";
import CrewModel from "./CrewModel";

interface CreditsModel {
  id: number;
  cast: CastModel[];
  crew: CrewModel[];
}

export default CreditsModel;
