import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
