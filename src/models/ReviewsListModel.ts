import BaseModel from "./BaseModel";
import ReviewModel from "./ReviewModel";

interface ReviewsListModel extends BaseModel {
  results: ReviewModel[];
}

export default ReviewsListModel;
