import { FeedbackUpdateManyWithoutProductsInput } from "./FeedbackUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutProductsInput;
  name?: string | null;
};
