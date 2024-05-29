import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogEntryWhereInput = {
  id?: StringFilter;
  level?: StringNullableFilter;
  message?: StringNullableFilter;
  source?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
