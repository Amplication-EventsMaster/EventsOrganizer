import { BookingUpdateManyWithoutEventsInput } from "./BookingUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  bookings?: BookingUpdateManyWithoutEventsInput;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  title?: string | null;
};
