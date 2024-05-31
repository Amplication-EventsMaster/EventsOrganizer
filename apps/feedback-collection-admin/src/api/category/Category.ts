import { Feedback } from "../feedback/Feedback";

export type Category = {
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
