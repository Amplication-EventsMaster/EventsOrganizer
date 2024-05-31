import { FeedbackUpdateManyWithoutCategoriesInput } from "./FeedbackUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
