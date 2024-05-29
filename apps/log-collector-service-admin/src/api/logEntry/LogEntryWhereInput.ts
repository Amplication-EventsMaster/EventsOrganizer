import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogEntryWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  level?: StringNullableFilter;
  message?: StringNullableFilter;
  source?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
