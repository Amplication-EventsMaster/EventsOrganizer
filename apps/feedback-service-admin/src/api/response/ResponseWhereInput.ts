import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackWhereUniqueInput } from "../feedback/FeedbackWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ResponseWhereInput = {
  content?: StringNullableFilter;
  feedback?: FeedbackWhereUniqueInput;
  id?: StringFilter;
  responder?: StringNullableFilter;
};
