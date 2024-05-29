import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LogLevelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
