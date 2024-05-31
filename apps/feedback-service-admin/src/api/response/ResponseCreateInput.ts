import { FeedbackWhereUniqueInput } from "../feedback/FeedbackWhereUniqueInput";

export type ResponseCreateInput = {
  content?: string | null;
  feedback?: FeedbackWhereUniqueInput | null;
  responder?: string | null;
};
