import { Response } from "../response/Response";
import { User } from "../user/User";

export type Feedback = {
  createdAt: Date;
  description: string | null;
  id: string;
  responses?: Array<Response>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
