import { ResponseCreateNestedManyWithoutFeedbacksInput } from "./ResponseCreateNestedManyWithoutFeedbacksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  description?: string | null;
  responses?: ResponseCreateNestedManyWithoutFeedbacksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
