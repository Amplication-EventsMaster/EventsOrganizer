import { ResponseUpdateManyWithoutFeedbacksInput } from "./ResponseUpdateManyWithoutFeedbacksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  description?: string | null;
  responses?: ResponseUpdateManyWithoutFeedbacksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
