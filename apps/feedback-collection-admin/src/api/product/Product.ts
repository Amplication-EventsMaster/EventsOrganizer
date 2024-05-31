import { Feedback } from "../feedback/Feedback";

export type Product = {
  createdAt: Date;
  description: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
