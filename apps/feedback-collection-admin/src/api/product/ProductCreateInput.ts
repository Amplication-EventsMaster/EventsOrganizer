import { FeedbackCreateNestedManyWithoutProductsInput } from "./FeedbackCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutProductsInput;
  name?: string | null;
};
