import { BookingCreateNestedManyWithoutEventsInput } from "./BookingCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  bookings?: BookingCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  title?: string | null;
};
