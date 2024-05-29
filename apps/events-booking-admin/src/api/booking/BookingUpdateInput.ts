import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type BookingUpdateInput = {
  customer?: string | null;
  event?: EventWhereUniqueInput | null;
  status?: "Option1" | null;
};
