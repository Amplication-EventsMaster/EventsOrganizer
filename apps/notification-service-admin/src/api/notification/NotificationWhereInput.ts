import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  customer?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  sentStatus?: BooleanNullableFilter;
};
