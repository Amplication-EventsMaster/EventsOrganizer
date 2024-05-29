import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  customer?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
