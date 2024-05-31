import { FeedbackWhereUniqueInput } from "../feedback/FeedbackWhereUniqueInput";

export type ResponseUpdateInput = {
  content?: string | null;
  feedback?: FeedbackWhereUniqueInput | null;
  responder?: string | null;
};
