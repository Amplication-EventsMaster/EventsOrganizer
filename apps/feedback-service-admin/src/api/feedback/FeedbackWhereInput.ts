import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  responses?: ResponseListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
