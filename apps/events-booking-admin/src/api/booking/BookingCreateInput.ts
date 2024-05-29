import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type BookingCreateInput = {
  customer?: string | null;
  event?: EventWhereUniqueInput | null;
  status?: "Option1" | null;
};
