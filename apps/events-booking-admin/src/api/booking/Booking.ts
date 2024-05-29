import { Event } from "../event/Event";

export type Booking = {
  createdAt: Date;
  customer: string | null;
  event?: Event | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
