import BaseModel from "./BaseModel";
import PersonListModel from "./PersonListModel";

interface PersonsListModel extends BaseModel {
  results: PersonListModel[];
}

export default PersonsListModel;
