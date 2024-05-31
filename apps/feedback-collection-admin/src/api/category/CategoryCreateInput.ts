import { FeedbackCreateNestedManyWithoutCategoriesInput } from "./FeedbackCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
