import { Booking } from "../booking/Booking";

export type Event = {
  bookings?: Array<Booking>;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  title: string | null;
  updatedAt: Date;
};
