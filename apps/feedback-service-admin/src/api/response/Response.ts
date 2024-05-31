import { Feedback } from "../feedback/Feedback";

export type Response = {
  content: string | null;
  createdAt: Date;
  feedback?: Feedback | null;
  id: string;
  responder: string | null;
  updatedAt: Date;
};
